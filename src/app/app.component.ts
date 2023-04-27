import { Component, OnInit } from '@angular/core';
import { MFCsnackbarService } from './services/mfcsnackbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'snackbar';
  data = {
    message: 'message',
    action: 'Ok',
    snackbarType: '',
  };
  constructor(private snackBar: MFCsnackbarService) {}
  ngOnInit(): void {
    setTimeout(() => this.snackBar.info(this.data), 1000);
  }
}
