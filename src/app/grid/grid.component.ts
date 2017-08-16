import { Component, OnInit, Input } from '@angular/core';
import { Link } from '../models/link';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @Input()
  links: Link[];

  constructor() { }

  ngOnInit() {
  }

}
