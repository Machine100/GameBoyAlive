import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { GameboyComponent } from './components/gameboy/gameboy.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    GameboyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
