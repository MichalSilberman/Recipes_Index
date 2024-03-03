import { Component } from '@angular/core';
import { Year } from '../Interfaces/Year';
import { YearService } from '../Services/year.service';

@Component({
  selector: 'app-year-select',
  templateUrl: './year-select.component.html',
  styleUrl: './year-select.component.css'
})
export class YearSelectComponent {
  constructor(private yearService: YearService) { }

  years: Year[] = [];

  getYears(): void {
    this.yearService.getYears().subscribe(years => this.years = years);
  }

  ngOnInit(): void {
    this.getYears();
  }
}
