import {
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { LoginDTO, RegistrationDTO } from 'src/models/user.model';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { EmailService } from 'src/email/email-service/email.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
    private jwtService: JwtService,
    private readonly email: EmailService,
  ) {}

  async register(credentials: RegistrationDTO) {
    try {
      const user = this.userRepo.create(credentials);
      await user.save();
      this.email.sendEmail(user.email, user.id, user.verificationCode);
      return { message: 'User created. Check your email for activation' };
    } catch (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        throw new ConflictException('Username allready taken');
      }
      throw new InternalServerErrorException('Server error');
    }
  }

  async login({ email, password }: LoginDTO) {
    try {
      const user = await this.userRepo.findOne({ where: { email } });
      const isValid = await user.comparePassword(password);
      if (!isValid || !user.isActivated) {
        throw new Error();
      }
      const payload = { username: user.username, isAdmin: user.isAdmin };
      const token = this.jwtService.sign(payload);

      return { user: { ...user.toJSON(), token } };
    } catch (err) {
      throw new UnauthorizedException('Invalid credentials');
    }
  }

  async verify(id: number, code: string) {
    const user = await this.userRepo.findOne({ id });
    if (user.verificationCode !== code) {
      throw new UnauthorizedException('Can not activate');
    }
    user.isActivated = true;
    await user.save();
    return { message: 'User activated. You can login now' };
  }
}
