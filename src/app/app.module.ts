import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component'; // Replace 'AppComponent' with your root component
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { FooterComponent } from './footer/footer.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, AboutComponent, SkillsComponent, FooterComponent, CustomButtonComponent,], // Add the root component to 'declarations'
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent] // Add the root component to 'bootstrap'
})
export class AppModule { }
