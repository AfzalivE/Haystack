import { Component } from '@angular/core';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  providers: [FirebaseService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  GLOBAL_FIREBASE_AUTH = FIREBASE_AUTH;
  title = 'Haystack';

  constructor(private firebase: FirebaseService) { }
}
