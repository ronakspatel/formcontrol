import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { InstanceComponent } from './instance/instance.component';

@NgModule({
  declarations: [
    AppComponent,
    FormbuilderComponent,
    InstanceComponent,
    
  ],
  imports: [
    BrowserModule,
    
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
