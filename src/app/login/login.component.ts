import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot} from '@angular/router';
import {Base64} from 'js-base64';
import {LoginService} from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router, private myService: LoginService,) {
  }

  ngOnInit() {

  }

  nameModel: any;
  psModel: any;
  btnLogin: string = 'Logar';
  loginerrortext: string = '';
  userToken: string;
  realname: string;

  login() {
    if (!this.nameModel || !this.psModel) {
      this.loginerrortext = 'Por favor, preencha com a senha do usuário';
    } else {
      this.userToken = `Basic ${Base64.encode(this.nameModel + ':' + this.psModel)}`;

      this.myService.login(this.userToken)
        .then(res => {
          if (res.status == 200) {
            console.log(res)
            if (this.nameModel == JSON.parse(res._body).name && this.psModel == JSON.parse(res._body).passwrod) {
              this.btnLogin = 'Logando...';
              this.realname = JSON.parse(res._body).name;
              sessionStorage.setItem('userToken', this.userToken);
              sessionStorage.setItem('realname', this.realname);
              this.router.navigateByUrl('workspace');
            } else {
              this.loginerrortext = 'A Senha do usuário que você inseriu é incorreta';
            }

          } else if (res.status == 401) {
            this.loginerrortext = 'A Senha do usuário que você inseriu é incorreta';
          } else {
            this.loginerrortext = 'O Servidor está ocupado. Tente novamente mais tarde';
          }
        });
    }
  }

  inputFocus() {
    this.loginerrortext = '';
  }
}
