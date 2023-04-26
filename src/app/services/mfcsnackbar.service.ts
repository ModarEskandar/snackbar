import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarRef,
} from '@angular/material/snack-bar';
import { SnackbarComponent } from '../snackbar/snackbar.component';

@Injectable({
  providedIn: 'root',
})
export class MFCsnackbarService {
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(data: any, options: MatSnackBarConfig<any> | undefined) {
    console.log(options);
    return this._snackBar.openFromComponent(SnackbarComponent, {
      ...options,
      panelClass: data.snackBarType + '-snackbar',
      data: data,
    });
  }

  info(data: any) {
    data = {
      ...data,
      snackBarType: 'info',
    };
    let snackBarRef = this.openSnackBar(data, {
      horizontalPosition: 'left',
      verticalPosition: 'top',
    });
    snackBarRef.afterDismissed().subscribe((res) => {
      console.log('The snackbar was dismissed', res);
    });

    snackBarRef.onAction().subscribe(() => {
      console.log('The snackbar action was triggered!');
    });
  }
  success(data: any) {
    data = {
      ...data,
      snackBarType: 'success',
    };
    let snackBarRef = this.openSnackBar(data, {
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
    snackBarRef.afterDismissed().subscribe((res) => {
      console.log('The snackbar was dismissed', res);
    });

    snackBarRef.onAction().subscribe(() => {
      console.log('The snackbar action was triggered!');
    });
  }
  warning(data: any) {
    data = {
      ...data,
      snackBarType: 'warning',
    };
    let snackBarRef = this.openSnackBar(data, {
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
    });
    snackBarRef.afterDismissed().subscribe((res) => {
      console.log('The snackbar was dismissed', res);
    });

    snackBarRef.onAction().subscribe(() => {
      console.log('The snackbar action was triggered!');
    });
  }
  error(data: any) {
    data = {
      ...data,
      snackBarType: 'error',
    };
    let snackBarRef = this.openSnackBar(data, {
      horizontalPosition: 'left',
      verticalPosition: 'bottom',
    });
    snackBarRef.afterDismissed().subscribe((res) => {
      console.log('The snackbar was dismissed', res);
    });

    snackBarRef.onAction().subscribe(() => {
      console.log('The snackbar action was triggered!');
    });
  }
}
