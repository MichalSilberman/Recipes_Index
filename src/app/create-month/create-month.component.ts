import { Component } from '@angular/core';
import { Month } from '../Interfaces/Month';

@Component({
  selector: 'app-create-month',
  templateUrl: './create-month.component.html',
  styleUrl: './create-month.component.css'
})
export class CreateMonthComponent {

  month: Month = {
    id: 4,
    name: 'טבת'
  }

}
