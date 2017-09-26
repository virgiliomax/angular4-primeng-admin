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
  GrowlModule, // Pop-up
  MultiSelectModule, // Multi-seleção
  ListboxModule,// Caixa de Seleção
  DropdownModule,// Drop-down
  CheckboxModule,// Checkbox
  MessagesModule, // Messages
  PaginatorModule,// Paginação
  ConfirmDialogModule,// Modal Confirmação
  InputTextareaModule,// InputTextarea
  OverlayPanelModule,
  TooltipModule, TreeTableModule,
} from 'primeng/primeng';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";
import {MyBreadcrumbModule} from "../components/my-breadcrumb/my-breadcrumb";
import {TreeComponent} from './tree.component';



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
    TreeTableModule,SharedModule,

    RouterModule.forChild([
      { path:'',component:TreeComponent}
    ])
  ],
  declarations: [TreeComponent],
  exports:[RouterModule]
})
export class TreeModule { }
