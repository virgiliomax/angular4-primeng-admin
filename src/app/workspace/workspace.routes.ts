import {WorkspaceComponent} from './workspace.component';
import {PageNotFoundComponent} from '../not-found.component';

export const workspaceRoutes = [
  {
    path: '',
    component: WorkspaceComponent,
    children: [
      {
        path: '', redirectTo: 'data-table', pathMatch: 'full'
      },
      {
        path: 'data-table',
        loadChildren: '../data-table/data-table.module#MyDataTableModule',
        title: 'Formulário Simples'
      },
      {
        path: 'primeng-form',
        loadChildren: '../form-primeng/form-primeng.module#FormPrimengModule',
        title: 'Formulário primeNG'
      },
      {
        path: 'ng-form',
        loadChildren: '../ng-form/ng-form.module#NgFormModule',
        title: 'Validação'
      },
      {
        path: 'input',
        loadChildren: '../input/input.module#InputModule',
        title: 'input'
      },
      {
        path: 'charts',
        loadChildren: '../charts/charts.module#ChartsModule',
        title: 'charts'
      },
      {
        path: 'tree',
        loadChildren: '../tree/tree.module#TreeModule',
        title: 'tree'
      }, {
        path: 'color',
        loadChildren: '../color/color.module#ColorModule',
        title: 'color'
      }, {
        path: 'icon',
        loadChildren: '../icon/icon.module#IconModule',
        title: 'icon'
      }, {
        path: 'citys',
        loadChildren: '../citys/citys.module#CitysModule',
        title: 'Cidades'
      }, {
        path: 'upload',
        loadChildren: '../upload/upload.module#UploadModule',
        title: 'Upload'
      },
      {
        path: 'data-table2',
        loadChildren: '../data-table2/data-table2.module#UploadModule',
        data: {preload: true},
        title: 'data-table2'
      }, {
        path: 'my-breadcrumb-demo',
        loadChildren: '../my-components-demo/my-breadcrumb-demo/my-breadcrumb-demo.module#MyBreadcrumbDemoModule',
        title: 'Breadcrumb'
      }, {
        path: 'my-switch-demo',
        loadChildren: '../my-components-demo/my-switch-demo/my-switch-demo.module#MySwitchDemoModule',
        title: 'Switch'
      }, {
        path: 'my-tag-demo',
        loadChildren: '../my-components-demo/my-tag-demo/my-tag-demo.module#MyTagDemoModule',
        title: 'Tag'
      }, {
        path: 'my-loading-demo',
        loadChildren: '../my-components-demo/my-loading-demo/my-loading-demo.module#MyLoadingDemoModule',
        title: 'Loading'
      }, {
        path: 'my-carousel-demo',
        loadChildren: '../my-components-demo/my-carousel-demo/my-carousel-demo.module#MyCarouselDemoModule',
        title: 'Carousel'
      },
      {
        path: '**',
        component: PageNotFoundComponent
      },
    ]
  }
];
