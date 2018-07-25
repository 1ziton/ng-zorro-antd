// ---------------------------------------------------------
// | Imports
// ---------------------------------------------------------

// Common of angular
import { NgModule, ModuleWithProviders } from '@angular/core';

// Services
import { API } from './services/api';

// Directives

// Tokens (eg. global services' config)

// Modules
import { NgZorroAntdModule } from '../../components/ng-zorro-antd.module';
import { AreaDownSelectModule } from './area-down-select/area-down-select.component';
import { ApiService } from './services/api.service';
import { YZTViewerDirectiveModule } from './yzt-viewer/yzt-viewer.directive';
import { EchartsModule } from './echarts/echarts.component';
import { DirectivesModule } from './ext-share/directives/yzt-directives.module';
import { UIGridModule } from './yzt-grid/yzt-grid.component';
import { CustomTemplateModule } from './yzt-grid/demo/custom-template.component';
import { GridIconModule } from './yzt-grid/demo/grid-icon.component';
import { GridIconComponent } from './yzt-grid/demo/grid-icon.component';
import { ShipperSelectModule } from './shipper-select/shipper-select.component';
// ---------------------------------------------------------
// | Exports
// ---------------------------------------------------------
// interface

// Modules
export { NgZorroAntdModule } from '../../components/ng-zorro-antd.module';
export { AreaDownSelectModule } from './area-down-select/area-down-select.component';
export { YZTViewerDirectiveModule } from './yzt-viewer/yzt-viewer.directive';
export { EchartsModule } from './echarts/echarts.component';
export { DirectivesModule } from './ext-share/directives/yzt-directives.module';
export { UIGridModule } from './yzt-grid/yzt-grid.component';
export { ShipperSelectModule } from './shipper-select/shipper-select.component';
// Components
// Services

// Tokens (eg. global services' config)

// ---------------------------------------------------------
// | Root module
// ---------------------------------------------------------

@NgModule({
  exports: [
    DirectivesModule,
    NgZorroAntdModule,
    AreaDownSelectModule,
    YZTViewerDirectiveModule,
    EchartsModule,
    UIGridModule,
    ShipperSelectModule,
    CustomTemplateModule,
    GridIconModule
  ]
})
export class ZorroExtModule {
  static forRoot(CustomAPI, API_BASE_URL): ModuleWithProviders {
    return {
      ngModule: ZorroExtModule,
      providers: [
        ApiService,
        { provide: API, useClass: CustomAPI },
        { provide: 'API_BASE_URL', useValue: API_BASE_URL }
      ]
    };
  }
}
