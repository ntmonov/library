import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { MainComponent } from './components/main/main/main.component';
import { AuthModule } from './components/auth/auth.module';
import { BookComponent } from './components/book/book.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, MainComponent, BookComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, AuthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
