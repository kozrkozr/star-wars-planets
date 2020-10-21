import {ApiResponseInterceptor} from '@app/core/services/interceptors/api-response.interceptor';

import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgModule, Optional, SkipSelf} from '@angular/core';

export const HttpInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: ApiResponseInterceptor, multi: true},
];

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [HttpInterceptorProviders],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
