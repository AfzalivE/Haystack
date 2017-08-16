import { Component, OnInit, Input } from '@angular/core';
import { Link } from '../models/link';

@Component({
  selector: 'app-griditem',
  templateUrl: './griditem.component.html',
  styleUrls: ['./griditem.component.scss']
})
export class GriditemComponent implements OnInit {

  @Input()
  link: Link;

  constructor() { }

  ngOnInit() {

  }

}
