import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Link } from '../models/link';

@Component({
  selector: 'app-input-form',
  providers: [FirebaseService],
  templateUrl: 'input.component.html',
  styleUrls: ['input.component.scss']
})

export class InputComponent implements OnInit {

  model = new Link(213, 'https://google.com');

  constructor(private firebase: FirebaseService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.validate(this.model)) {
      this.firebase.addLink(this.model);
      this.newLink();
    }
    alert('submitted');
  }

  validate(model: Link) {
    return true;
  }

  newLink() {
    this.model = new Link(213, '');
  }

}
