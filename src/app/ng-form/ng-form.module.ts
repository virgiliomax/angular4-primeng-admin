import { NgModule }       from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from "@angular/router";
import {
  PanelMenuModule,
  TabMenuModule,   // tabMenu
  AutoCompleteModule,
  ButtonModule,  // Button
  PanelModule,     // Painel
  InputTextModule,
  DataTableModule,  // Tabela de Dados
  DialogModule,   // Modal
  SplitButtonModule,
  TabViewModule,  // table
  AccordionModule,// Accordion
  SharedModule,
  CalendarModule,
  GrowlModule,// Pop-up
  MultiSelectModule, // Multi-seleção
  ListboxModule,// Caixa de Seleção
  DropdownModule,// Drop-down
  CheckboxModule,// Checkbox
  MessagesModule,// Messages
  PaginatorModule,// Paginação
  ConfirmDialogModule,// Modal Confirmação
  InputTextareaModule,// InputTextarea
  OverlayPanelModule,
  TooltipModule,
} from 'primeng/primeng';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";
import {MyBreadcrumbModule} from "../components/my-breadcrumb/my-breadcrumb";
import {NgFormComponent} from "./ng-form.component";



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


    RouterModule.forChild([
      { path:'',component:NgFormComponent}
    ])
  ],
  declarations: [NgFormComponent],
  exports:[RouterModule]
})
export class NgFormModule { }
