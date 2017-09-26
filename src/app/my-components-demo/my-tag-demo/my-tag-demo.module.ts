import { NgModule }       from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from "@angular/router";
import {
  PanelMenuModule,
  TabMenuModule,   //tabMenu
  AutoCompleteModule,
  ButtonModule,  //Button
  PanelModule,     //
  InputTextModule,
  DataTableModule,  //
  DialogModule,   //
  SplitButtonModule,
  TabViewModule,  //table
  AccordionModule,//
  SharedModule,
  CalendarModule,
  GrowlModule,//
  MultiSelectModule,//
  ListboxModule,//
  DropdownModule,//
  CheckboxModule,//
  MessagesModule,//Messages
  PaginatorModule,//
  ConfirmDialogModule,//
  InputTextareaModule,// InputTextarea
  OverlayPanelModule,
  TooltipModule,
  CodeHighlighterModule
} from 'primeng/primeng';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";

import {MyTagComponent} from './my-tag-demo.component';
import {MyTagModule} from '../../components/my-tag/my-tag';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    CommonModule,
    ReactiveFormsModule,
  
  
    MyTagModule,

    RouterModule.forChild([
      { path:'',component:MyTagComponent}
    ])
  ],
  declarations: [MyTagComponent],
  exports:[RouterModule]
})
export class MyTagDemoModule { }
