import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot} from '@angular/router';
import {Car, Message} from '../common/car';
import {beforeUrl} from '../common/public-data';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {WorkspaceService} from './workspace.service';


@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css'],
  animations: [
    trigger('menuState', [
      state('inactive', style({
        left: '0px'
      })),
      state('active', style({
        left: '-110px'
      })),
      transition('inactive => active', animate('200ms ease-in')),
      transition('active => inactive', animate('200ms ease-out'))
    ]),
    trigger('routerState', [
      state('inactive', style({
        marginLeft: '170px'
      })),
      state('active', style({
        marginLeft: '50px'
      })),
      transition('inactive => active', animate('200ms ease-in')),
      transition('active => inactive', animate('200ms ease-out'))
    ]),
    trigger('imgState', [
      state('inactive', style({
        left: '16px'
      })),
      state('active', style({
        left: '123px'
      })),
      transition('inactive => active', animate('200ms ease-in')),
      transition('active => inactive', animate('200ms ease-out'))
    ])
  ]
})
export class WorkspaceComponent implements OnInit {

  constructor(private myService: WorkspaceService, public router: Router) {
  };

  ngOnInit() {
    this.getMenu();
    if (sessionStorage.getItem('userToken')) {
      this.realname = sessionStorage.getItem('realname');
    } else {
      this.router.navigateByUrl('login');
    }
  }

  /*************************  ********************************/
  informationNumber: any = 18;                      // número de mensagens
  menus: any[];                                     // Menu
  msgs: Message[] = [];                             // Mensagem
  state: string = 'inactive';                       // Status do menu
  pTooltipIf: boolean = false;                      // pTooltipIf Status
  beforeUrl: string = beforeUrl;                    // Endereço API
  timeout: any;                                     // Mensagem de erro (tempo)
  realname: string;                                 // Nome Usuário Principal
  menumsg: string;


  /************************* Obtém o menu ********************************/
  getMenu() {
    if (sessionStorage.getItem('menu111')) {
      this.menus = JSON.parse(sessionStorage.getItem('menu111'));
      console.log(this.menus);
    } else {
      this.myService.getMenu()
        .then(
          menus => this.menus = menus,
          error => {
            this.menumsg = 'Falha ao obter Menu, tente novamente.';
          }
        )
        .then(() => {
          if (this.menus) {
            sessionStorage.setItem('menu111', JSON.stringify(this.menus));
          }
        });
    }

  }

  /************************* Alterar a largura do menu à esquerda ********************************/
  changeMenuWidth() {
    this.state = (this.state === 'active' ? 'inactive' : 'active');
    //Operação DOM
    let fa = document.getElementsByClassName('ui-accordion-header');
    if (this.state == 'active') {
      for (let i = 0; i < fa.length; i++) {
        fa[i].getElementsByTagName('span')[0].style.display = 'none';
      }
      this.pTooltipIf = true;
    } else {
      for (let i = 0; i < fa.length; i++) {
        fa[i].getElementsByTagName('span')[0].style.display = 'block';
      }
      this.pTooltipIf = false;
    }
  }

  /************************* Encerrar Login ********************************/
  loginOut() {
    sessionStorage.removeItem('userToken');
    sessionStorage.removeItem('menu111');
    sessionStorage.removeItem('realname');
    this.router.navigateByUrl('login');
  }
}
