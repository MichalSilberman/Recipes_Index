import { Component } from '@angular/core';
import { Month } from '../Interfaces/Month';
import { MonthService } from '../Services/month.service';

@Component({

  selector: 'app-months-select',
  templateUrl: './months-select.component.html',
  styleUrl: './months-select.component.css',

})
export class MonthsSelectComponent {
  constructor(private monthService: MonthService) { }

  months: Month[] = [];
  
  createMonth: boolean = false;
  getMonth(): void {
    this.monthService.getMonths().subscribe(months => this.months = months);
  }
  changeStatus(value: string): void {
    console.log(value);
    if(value ==="הוסף חודש"){
      this.createMonth = true;
    }
    else {this.createMonth = false;}
  }

  ngOnInit(): void {
    this.getMonth();
  }

}
