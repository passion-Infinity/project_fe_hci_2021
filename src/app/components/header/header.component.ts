import { Component, OnInit } from '@angular/core';
import { categories } from '../../models/categories.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  categories: any[] = categories;

  constructor() {}

  ngOnInit(): void {}
}
