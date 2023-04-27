import { NGXLogger } from 'ngx-logger';
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
  constructor(private _snackBar: MatSnackBar, private logger: NGXLogger) {}

  private openSnackBar(data: any, options: MatSnackBarConfig<any> | undefined) {
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
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
    snackBarRef.afterDismissed().subscribe(() => {
      this.logger.info('info snackbar was Dismissed!');
      setTimeout(() => this.success(data), 1000);
    });

    snackBarRef.onAction().subscribe(() => {
      this.logger.info('info snackbar action was triggered!');
    });
  }

  success(data: any) {
    data = {
      ...data,
      snackBarType: 'success',
    };
    let snackBarRef = this.openSnackBar(data, {
      horizontalPosition: 'start',
      verticalPosition: 'top',
    });
    snackBarRef.afterDismissed().subscribe(() => {
      this.logger.trace('success snackbar was Dismissed!');
      setTimeout(() => this.warning(data), 1000);
    });

    snackBarRef.onAction().subscribe(() => {
      this.logger.trace('success snackbar action was triggered!');
    });
  }

  warning(data: any) {
    data = {
      ...data,
      snackBarType: 'warning',
    };
    let snackBarRef = this.openSnackBar(data, {
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
    });
    snackBarRef.afterDismissed().subscribe(() => {
      setTimeout(() => this.error(data), 1000);

      this.logger.warn('warning snackbar was Dismissed!');
    });

    snackBarRef.onAction().subscribe(() => {
      this.logger.warn('warning snackbar action was triggered!');
    });
  }

  error(data: any) {
    data = {
      ...data,
      snackBarType: 'error',
    };
    let snackBarRef = this.openSnackBar(data, {
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
    });
    snackBarRef.afterDismissed().subscribe(() => {
      setTimeout(() => this.info(data), 1000);

      this.logger.error('error snackbar was Dismissed!');
    });

    snackBarRef.onAction().subscribe(() => {
      this.logger.error('error snackbar action was triggered!');
    });
  }
}
