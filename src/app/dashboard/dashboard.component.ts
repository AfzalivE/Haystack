import { Component, OnInit } from '@angular/core';
import { Link } from '../models/link';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-dashboard',
  providers: [FirebaseService],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  links: Link[];

  ngOnInit() {
    this.getLinks();
  }

  constructor(private firebase: FirebaseService) { }

  getLinks(): void {
      this.firebase.getLinks().then(links => {
        this.links = links;
      });
  }
}
