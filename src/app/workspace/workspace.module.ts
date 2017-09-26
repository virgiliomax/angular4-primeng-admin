import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';


import {WorkspaceComponent} from './workspace.component';

import {workspaceRoutes} from './workspace.routes';
import {CommonModule} from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {SharedModule, AccordionModule, GrowlModule, TooltipModule} from 'primeng/primeng';
import {MyInformationModule} from '../components/my-information/my-information';
import {PageNotFoundComponent} from '../not-found.component';
import {MyGoTopModule} from '../components/my-gotop/my-gotop';



@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    CommonModule,
    RouterModule.forChild(workspaceRoutes),

    SharedModule,        
    AccordionModule,     //  primeNG Accordion
    GrowlModule,         //  primeNG msg
    TooltipModule,       //  Tooltip
    MyInformationModule, //  Mensagem principal
    MyGoTopModule,       //  Principais componentes
  ],
  exports: [],
  declarations: [
    WorkspaceComponent,
    PageNotFoundComponent
  ],
  providers: [

  ],
})
export class WorkspaceModule {
}
