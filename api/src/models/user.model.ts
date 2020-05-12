import {
  IsEmail,
  IsString,
  MinLength,
  MaxLength,
  IsBoolean,
} from 'class-validator';

export class LoginDTO {
  @IsEmail()
  @IsString()
  email: string;

  @IsString()
  @MinLength(4)
  password: string;
}

export class RegistrationDTO extends LoginDTO {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  address: string;

  @IsBoolean()
  isAdmin: boolean = false;
}

export interface AuthPayload {
  username: string;
  isAdmin: boolean;
}
