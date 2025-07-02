
import { NgClass, NgFor, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault, NgClass],
  templateUrl: './awards.html',
  styleUrl: './awards.css'
})
export class Awards {
  awards = [
    {
      title: 'Vienna Fine Art Photographer of the Year', year: 2021, color: 'warning',

    },
    {
      title: 'Top 10 wedding Photographers in Europe', year: 2020, color: 'secondary',
    },
    {
      title: 'People Choice Portrait Award', year: 2019, color: 'danger',
    },
  ];

}