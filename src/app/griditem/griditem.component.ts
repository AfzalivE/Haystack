import { Component, OnInit, Input } from '@angular/core';
import { Link } from '../models/link';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-griditem',
  providers: [FirebaseService],
  templateUrl: './griditem.component.html',
  styleUrls: ['./griditem.component.scss']
})
export class GriditemComponent implements OnInit {

  @Input()
  link: Link;

  constructor(private firebase: FirebaseService) { }

  ngOnInit() {

  }

  delete() {
    this.firebase.removeLink(this.link);
  }

  click() {
    window.open(this.link.url);
  }

}
