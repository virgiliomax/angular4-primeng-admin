import {Injectable} from '@angular/core';
import {Car} from '../common/car';
import {Http, Response}  from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Ajax} from '../common/ajax';


@Injectable()
export class DataTableService {
  
  constructor(public ajax: Ajax, public http: Http) {
  }
  
  private extractJson(res: Response) {
    let body = res.json();
    return body || {};
  }
  
  //Aquisição de dados
  private getUrl = 'assets/data.json';
  
  get(params): Promise<Car[]> {
    return this.ajax.get(this.getUrl, params)
      .toPromise()
      .then(this.extractJson);
  }
  
  //Acesso à indústria
  private getIndustriesUrl = 'assets/industries.json';
  
  getIndustries(): Promise<Car[]> {
    return this.ajax.get(this.getIndustriesUrl)
      .toPromise()
      .then(this.extractJson);
  }
  
  //Adicionar
  private addUrl = 'add';
  
  add(params): Promise<Car> {
    return this.ajax.post(this.addUrl, params)
      .toPromise()
      .then((res) => res);
  }
  
  //Editar
  private editUrl = 'edit';
  
  edit(params): Promise<Car> {
    return this.ajax.put(this.editUrl, params)
      .toPromise()
      .then((res) => res);
  }
  
  //Excluír
  private deleteUrl = 'delete';
  
  delete(params): Promise<Car> {
    let url = this.deleteUrl + '?ids=' + params;
    return this.ajax.patch(url, params)
      .toPromise()
      .then((res) => res);
    
  }
  
  //Última cidade json - Obter http://passer-by.com/data_location/list.json
  private citysUrl = 'http://passer-by.com/data_location/list.json';
  
  getCitys(): Promise<Car[]> {
    let url = this.citysUrl;
    return this.http.get(url)
      .toPromise()
      .then(this.extractJson)
      .catch(res => res);
  }
  
  
}
