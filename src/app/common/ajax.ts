/*
 * Encapsular um serviço http
 * ngx-toastr    Um componente global de informação não relacionado  https://cipchk.github.io/ngx-notify/
 * Retorna a seqüência de mensagem de erro para o componente.
 *
 * */
import 'rxjs/add/operator/catch';
import {Injectable} from '@angular/core';
import {Http, RequestOptions, URLSearchParams, Headers, Response} from '@angular/http';
import {beforeUrl} from './public-data';
import 'rxjs/add/operator/timeout';
import {ToastrService} from 'ngx-toastr';
@Injectable()
export class Ajax {
  url: string = beforeUrl;                                // Interface
  Headers: any = {                                        // Headers
    'Content-Type': 'application/json', 'Authorization': sessionStorage.getItem('userToken')
  };
  timeout: number = 5000;                                 // Tempo de Espera
  
  constructor(public http: Http, private toastr: ToastrService) {
  }
  
  get(endpoint: string, params?: any) {
    let headers = new Headers(this.Headers);
    let options = new RequestOptions({headers: headers});
    if (params) {
      let p = new URLSearchParams();
      for (let k in params) {
        p.set(k, params[k]);
      }
      options.search = !options.search && p || options.search;
    }
    let taht = this;
    return this.http.get(this.url + endpoint, options).timeout(this.timeout).catch(
      (error: Response | any) => {
        if (error.status == 0) {
          taht.toastr.info('Requisição não executada, 1: Serviço não iniciado 2: Erro de endereço api');
        } else {
          if (error._body) {
            const err = JSON.parse(error._body);
            if (error.status >= 500) {
              taht.toastr.warning(err.message.substring(0, 40));
            } else {
              taht.toastr.error(err.message.substring(0, 40));
            }
          } else {
            if (error.status >= 500) {
              taht.toastr.error('A conexão com o Servidor expirou');
            } else {
              if (error.message == 'Timeout has occurred') {
                taht.toastr.warning('A conexão com o Servidor expirou');
              } else {
                taht.toastr.warning('Erro no Servidor.');
              }
            }
          }
        }
        return Promise.reject(error);
      });
  }
  
  post(endpoint: string, body: any) {
    let headers = new Headers(this.Headers);
    let options = new RequestOptions({headers: headers});
    let taht = this;
    return this.http.post(this.url + endpoint, body, options).timeout(this.timeout).catch(
      (error: Response | any) => {
        if (error.status == 0) {
          taht.toastr.info('Requisição não executada, 1: Serviço não iniciado 2: Erro de endereço api');
        } else {
          if (error._body) {
            const err = JSON.parse(error._body);
            if (error.status >= 500) {
              taht.toastr.warning(err.message.substring(0, 40));
            } else {
              taht.toastr.error(err.message.substring(0, 40));
            }
          } else {
            if (error.status >= 500) {
              taht.toastr.error('A conexão com o Servidor expirou');
            } else {
              if (error.message == 'Timeout has occurred') {
                taht.toastr.warning('A conexão com o Servidor expirou');
              } else {
                taht.toastr.warning('Erro no Servidor.');
              }
            }
          }
        }
        return Promise.reject(error);
      });
  }
  
  put(endpoint: string, body: any) {
    let headers = new Headers(this.Headers);
    let options = new RequestOptions({headers: headers});
    let taht = this;
    return this.http.put(this.url + endpoint, body, options).timeout(this.timeout).catch(
      (error: Response | any) => {
        if (error.status == 0) {
          taht.toastr.info('Requisição não executada, 1: Serviço não iniciado 2: Erro de endereço api');
        } else {
          if (error._body) {
            const err = JSON.parse(error._body);
            if (error.status >= 500) {
              taht.toastr.warning(err.message.substring(0, 40));
            } else {
              taht.toastr.error(err.message.substring(0, 40));
            }
          } else {
            if (error.status >= 500) {
              taht.toastr.error('A conexão com o Servidor expirou');
            } else {
              if (error.message == 'Timeout has occurred') {
                taht.toastr.warning('A conexão com o Servidor expirou');
              } else {
                taht.toastr.warning('Erro no Servidor.');
              }
            }
          }
        }
        return Promise.reject(error);
      }
    );
  }
  
  delete(endpoint: string) {
    let headers = new Headers(this.Headers);
    let options = new RequestOptions({headers: headers});
    let taht = this;
    return this.http.delete(this.url + endpoint, options).timeout(this.timeout).catch(
      (error: Response | any) => {
        if (error.status == 0) {
          taht.toastr.info('Requisição não executada, 1: Serviço não iniciado 2: Erro de endereço api');
        } else {
          if (error._body) {
            const err = JSON.parse(error._body);
            if (error.status >= 500) {
              taht.toastr.warning(err.message.substring(0, 40));
            } else {
              taht.toastr.error(err.message.substring(0, 40));
            }
          } else {
            if (error.status >= 500) {
              taht.toastr.error('A conexão com o Servidor expirou');
            } else {
              if (error.message == 'Timeout has occurred') {
                taht.toastr.warning('A conexão com o Servidor expirou');
              } else {
                taht.toastr.warning('Erro no Servidor.');
              }
            }
          }
        }
        return Promise.reject(error);
      }
    );
  }
  
  patch(endpoint: string, body: any) {
    let headers = new Headers(this.Headers);
    let options = new RequestOptions({headers: headers});
    let taht = this;
    return this.http.patch(this.url + endpoint, body, options).timeout(this.timeout).catch(
      (error: Response | any) => {
        if (error.status == 0) {
          taht.toastr.info('Requisição não executada, 1: Serviço não iniciado 2: Erro de endereço api');
        } else {
          if (error._body) {
            const err = JSON.parse(error._body);
            if (error.status >= 500) {
              taht.toastr.warning(err.message.substring(0, 40));
            } else {
              taht.toastr.error(err.message.substring(0, 40));
            }
          } else {
            if (error.status >= 500) {
              taht.toastr.error('A conexão com o Servidor expirou');
            } else {
              if (error.message == 'Timeout has occurred') {
                taht.toastr.warning('A conexão com o Servidor expirou');
              } else {
                taht.toastr.warning('Erro no Servidor.');
              }
            }
          }
        }
        return Promise.reject(error);
      }
    );
  }
}


