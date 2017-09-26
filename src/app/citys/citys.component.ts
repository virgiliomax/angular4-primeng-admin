import {Component, OnInit} from '@angular/core';
import {DataTableService} from '../data-table/data-table.service';
import {Message} from '../common/car';

@Component({
  selector: 'app-citys',
  templateUrl: './citys.component.html',
  styleUrls: ['./citys.component.css']
})
export class CitysComponent implements OnInit {
  
  constructor(private myService: DataTableService) {
  }
  
  ngOnInit() {
    this.getCitys();
  }
  
  msgs: Message[] = [];                                    // Mensagem
  /************************* Cidades ********************************/
  citys: any;                                             // Dados Cidades
  city1Array: any = [];
  city1NgModel: any;
  city2Array: any = [];
  city2NgModel: any;
  city2Disabled: boolean = true;
  city3Array: any = [];
  city3NgModel: any;
  city3Disabled: boolean = true;
  //Obtendo dados das cidades e vilareijos.
  getCitys() {
    this.myService.getCitys()
      .then(citys => {
          this.citys = citys;
        }, res => this.msg(4, 'Aquisção de dados falhou!')
      )
      .then(
        () => {
          for (let i in  this.citys) {
            if (parseInt(i) % 10000 === 0) {
              this.city1Array.push({
                label: this.citys[i],
                value: i
              });
            }
            
          }
        }
      );
  }
  
  //Nível cidade ou vilareijo (evento change)
  city1onChange() {
    this.city2Array = [];
    for (let i in  this.citys) {
      if (parseInt(i.substring(0, 2)) == this.city1NgModel.substring(0, 2)) {
        if (parseInt(i) % 100 === 0 && parseInt(i) % 10000 != 0) {
          this.city2Array.push({
            label: this.citys[i],
            value: i
          });
        }
        if (i.substring(0, 2) == '11' || i.substring(0, 2) == '12' || i.substring(0, 2) == '82' || i.substring(0, 2) == '81'
          || i.substring(0, 2) == '50' || i.substring(0, 2) == '31'
        ) {
          if (parseInt(i) % 10000 != 0) {
            this.city2Array.push({
              label: this.citys[i],
              value: i
            });
          }
        }
      }
    }
    if (this.city2Array.length == 0) {
      this.city2Disabled = true;
      this.city3Disabled = true;
      this.city3Array = [];
    } else {
      this.city2Disabled = false;
      this.city3Disabled = true;
      this.city3Array = [];
    }
  }
  
  // Segundo drop-down - (evento change)
  city2onChange() {
    this.city3Array = [];
    for (let i in  this.citys) {
      if (parseInt(i.substring(0, 4)) == this.city2NgModel / 100) {
        if (parseInt(i) % 100 != 0) {
          this.city3Array.push({
            label: this.citys[i],
            value: i
          });
        }
      }
    }
    if (this.city3Array.length == 0) {
      this.city3Disabled = true;
    } else {
      this.city3Disabled = false;
    }
  }
  
  /************************* Função de Retorno ********************************/
  timeout: any;
  
  msgError(error) {
    this.msgs.push({severity: <any>error.split('|')[1], detail: <any>error.split('|')[0]});
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      this.msgs = [];
    }, 3000);
  }
  
  msg(num, msg) {
    let type = 'info';
    if (num == 1) {
      type = 'success';
    } else if (num == 2) {
      type = 'info';
    } else if (num == 3) {
      type = 'warn';
    } else if (num == 4) {
      type = 'error';
    }
    this.msgs.push({severity: type, detail: msg});
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      this.msgs = [];
    }, 3000);
  }
}
