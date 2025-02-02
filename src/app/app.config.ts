import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ProductServiceService } from './product/product-service.service';
import { CategoryServiceService } from './category/category-service.service';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  //gli passo il importProvidersFrom(HttpClientModule) per utilizzare l'Http client globalmente
  providers: [
    provideRouter(routes),
    importProvidersFrom([
        HttpClientModule,
        ProductServiceService,
        CategoryServiceService,        
    ]),
    provideAnimations()
],
};
