import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { 
        MdButtonModule, 
        MdDatepickerModule, 
        MdNativeDateModule, 
        MdInputModule, 
        MdIconModule,
        MdSidenavModule,
        MdCheckboxModule,
        MdProgressBarModule,
        MdMenuModule,
        MdToolbarModule,
        MdCardModule,
        MdListModule,
        MdGridListModule,
        MdTooltipModule,
       } from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdDatepickerModule,
    MdInputModule,
    MdNativeDateModule,
    MdIconModule,
    MdSidenavModule,
    MdCheckboxModule,
    MdProgressBarModule,
    MdMenuModule,
    MdToolbarModule,
    MdCardModule,
    MdListModule,
    MdGridListModule,
    MdTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
