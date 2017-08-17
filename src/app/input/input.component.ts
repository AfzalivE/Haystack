import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { PagefetchService } from '../services/pagefetch.service';
import { Link } from '../models/link';

@Component({
  selector: 'app-input-form',
  providers: [FirebaseService, PagefetchService],
  templateUrl: 'input.component.html',
  styleUrls: ['input.component.scss']
})

export class InputComponent implements OnInit {

  model = new Link(213, 'https://google.com');

  constructor(private firebase: FirebaseService, private pagefetch: PagefetchService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.validate(this.model)) {
      this.pagefetch.fetchPage(this.model.link);
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
