import { NgModule }       from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from "@angular/router";
import {
  PanelMenuModule,
  TabMenuModule,   // tabMenu
  AutoCompleteModule,
  ButtonModule,  // Button
  PanelModule,     // Recipiente
  InputTextModule,
  DataTableModule,  // Tabela de Dados
  DialogModule,   // Modal
  SplitButtonModule,
  TabViewModule,  // Tabela
  AccordionModule,// Accordion
  SharedModule,
  CalendarModule,
  GrowlModule,// Pop-up
  MultiSelectModule,// Seleção Múltipla
  ListboxModule,// Caixa de Seleção
  DropdownModule,// Drop-down
  CheckboxModule,// Check-box
  MessagesModule,//Messages
  PaginatorModule,// Paginação
  ConfirmDialogModule,// Modal Confirmação
  InputTextareaModule,// InputTextarea
  OverlayPanelModule,
  TooltipModule,
} from 'primeng/primeng';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";
import { UploadComponent} from './upload.component';
import {MyBreadcrumbModule} from '../components/my-breadcrumb/my-breadcrumb';

import {NgUploaderModule} from 'ngx-uploader';



@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    CommonModule,
    ReactiveFormsModule,

    ButtonModule,
    PanelModule,
    InputTextModule,
    DataTableModule,
    DialogModule,
    SharedModule,
    CalendarModule,
    GrowlModule,
    MultiSelectModule,
    DropdownModule,
    CheckboxModule,
    PaginatorModule,
    TooltipModule,
    OverlayPanelModule,

    MyBreadcrumbModule,
    NgUploaderModule,

    RouterModule.forChild([
      { path:'',component:UploadComponent}
    ])
  ],
  declarations: [UploadComponent],
  exports:[RouterModule]
})
export class UploadModule { }
