import { Component, Optional } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MdDialog, MdDialogRef, MdSnackBar } from "@angular/material";

const IP_REGEX = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _dialog: MdDialog, private _snackbar: MdSnackBar) { }

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  ipFormControl = new FormControl('', [Validators.required, Validators.pattern(IP_REGEX)]);



  openDialog() {
    let dialogRef = this._dialog.open(DialogContent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }

  showSnackbar() {
    this._snackbar.open('HOLA Ng-Material', 'CERRAR');
  }

}


@Component({
  selector: 'dialog-example',
  template: `
    <p>Este es un Dialogo de Ejemplo</p>
    <p>
      <label>
        Aqui le pedimos un dato al usuario:
        <input #dialogInput>
      </label>
    </p>
    <p> <button md-button (click)="dialogRef.close(dialogInput.value)">CERRAR</button> </p>
  `,
})
export class DialogContent { 
  constructor(@Optional() public dialogRef: MdDialogRef<DialogContent>) { }
}
