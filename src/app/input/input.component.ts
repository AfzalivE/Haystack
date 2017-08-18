import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import {MdSnackBar} from '@angular/material';
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

  url: string;
  tags: string;

  @ViewChild('urlField')
  urlField: ElementRef;

  constructor(public snackBar: MdSnackBar, private firebase: FirebaseService, private pagefetch: PagefetchService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(_ => this.initialize());
  }

  initialize() {
    this.urlField.nativeElement.focus();
  }

  onSubmit() {
    if (this.validate(this.url)) {
      this.pagefetch.fetchPage(this.url)
      .then((link) => {
        link.tags = this.tags;
        this.firebase.addLink(link);
        this.resetForm();
        this.showSuccessSnackbar();        
      });
    } else {
      this.showErrorSnackbar();
    }
  }

  validate(url: string) {
    const matcher = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
    return matcher.test(url);
  }

  resetForm() {
    this.url = '';
    this.tags = '';
  }

  onPaste(event: any) {
    let content = event.clipboardData.getData('text/plain');
    this.url = content;
    this.urlField.nativeElement.focus();
  }

  showSuccessSnackbar() {
    this.snackBar.open('Link saved', null, {
      duration: 500
    });
  }

  showErrorSnackbar() {
    this.snackBar.open('Link is not valid', null, {
      duration: 1000
    });
  }
}
