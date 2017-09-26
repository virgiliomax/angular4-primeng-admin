import { Component, OnInit } from '@angular/core';
import {beforeUrl, pageAnimation,} from "../common/public-data";
import {Message} from '../common/car';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
  animations: [
    pageAnimation
  ]
})
export class ChartsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.data = {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
      datasets: [
        {
          label: 'Meu Primeiro Dataset',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'Meu Segundo Dataset',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    }
  }
  msgs: Message[] = [];                                  // Mensagem
  data: any;
}
