import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
        MdSidenavModule,
        MdToolbarModule,
        MdIconModule,
        MdTooltipModule,
        MdButtonModule,
        MdButtonToggleModule,
        MdMenuModule,
        MdCardModule,
        MdInputModule,
        MdDatepickerModule,
        MdNativeDateModule,
        MdCheckboxModule,
        MdRadioModule,
        MdSelectModule,
        MdSlideToggleModule,
        MdTabsModule,
        MdChipsModule,
        MdProgressSpinnerModule,
        MdProgressBarModule,
        MdDialogModule,
        MdSnackBarModule

       } from '@angular/material';

import { AppComponent, DialogContent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogContent
  ],
  entryComponents : [DialogContent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // MATERIAL
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule,
    MdTooltipModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdMenuModule,
    MdCardModule,
    MdInputModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdCheckboxModule,
    MdRadioModule,
    MdSelectModule,
    MdSlideToggleModule,
    MdTabsModule,
    MdChipsModule,
    MdProgressSpinnerModule,
    MdProgressBarModule,
    MdDialogModule,
    MdSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
