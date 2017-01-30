import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';


import { HeroService } from './hero.service';




@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent],
  providers: [HeroService],
  bootstrap: [AppComponent]

})
export class AppModule { }
