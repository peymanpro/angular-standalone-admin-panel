import { ApplicationConfig, ErrorHandler, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { apiInterceptor } from './core/http/interceptors/api.interceptor';
import { provideAppSettings } from './core/config/app-settings.provider';
import { routes } from './app.routes';
import { GlobalErrorHandler } from './core/error-handling/global-error-handler';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([apiInterceptor])),
    provideAppSettings(),
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
  ],
};
