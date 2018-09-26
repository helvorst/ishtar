import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GatesComponent } from './gates/gates.component';
import { AnimalService } from 'src/app/animal.service';


@NgModule({
  declarations: [
    AppComponent,
    GatesComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [{provide: AnimalService, useClass: AnimalService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
