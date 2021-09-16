import { Component, OnInit } from '@angular/core';
import { computers, brand_computer } from 'src/app/models/computer,model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  computers: any[] = computers;
  price_range: string;
  rangePriceValues: any[] = [1, 5000];
  month_periods: any[] = [1, 3, 6, 10, 12];
  currentIndex: number = 0;
  selectedBrand: string;
  brand_computer: any[] = brand_computer;

  constructor() {}

  ngOnInit(): void {}

  onSelect(value: number): void {
    this.currentIndex = value;
  }
}
