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
    message: 'hello there!',
    action: 'wow?!',
    snackbarType: '',
  };
  constructor(private snackBar: MFCsnackbarService) {}
  ngOnInit(): void {
    setTimeout(() => this.snackBar.info(this.data), 1000);
    setTimeout(() => this.snackBar.error(this.data), 2000);
    setTimeout(() => this.snackBar.success(this.data), 3000);
    setTimeout(() => this.snackBar.warning(this.data), 4000);
  }
}
