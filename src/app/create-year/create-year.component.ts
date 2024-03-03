import { Component } from '@angular/core';
import { Year } from '../Interfaces/Year';
import { YearService } from '../Services/year.service';

@Component({
  selector: 'app-create-year',
  templateUrl: './create-year.component.html',
  styleUrl: './create-year.component.css'
})
export class CreateYearComponent {
  year: Year = {
    id: 5784,
    name: 'תשפ"ד'
  }

  constructor(private yearService: YearService) { }

  add(name: string, id: string): void {
    name = name.trim();
    if (!name) { return; }
    this.yearService.addYear({ name: name, id: Number(id) } as Year)
      .subscribe(hero => {
        // this.heroes.push(hero);
      });
  }
}
