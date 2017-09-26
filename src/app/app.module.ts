import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {appRoutes} from './app.routes';
import {LoginService} from './login/login.service';
import {Preload} from './preloading';
import {WorkspaceService} from './workspace/workspace.service';
import {DataTableService} from './data-table/data-table.service';
import {Ajax} from './common/ajax';

import {ToastrModule} from 'ngx-toastr';
import {NgProgressModule} from 'ngx-progressbar';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgProgressModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      preventDuplicates: true
    }), // Pop-up mensagem
    RouterModule.forRoot(
      appRoutes,
      {preloadingStrategy: Preload}
    ),
  ],
  providers: [
    Ajax,
    Preload,
    LoginService,
    WorkspaceService,
    DataTableService,
  ],
  bootstrap: [AppComponent]
})
/**                     Recomenda-se colocar todos os serviços no app.module
 *  Ajax                Serviço que encapsula http como ajax
 *  Preload             Serviço de pré-carga
 *  LoginService        Serviço de Login
 *  WorkspaceService    Serviço de área de trabalho
 *  DataTableService    Serviço de DataTable
 *
 *
 * */
export class AppModule {
}
