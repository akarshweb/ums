import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { registerLicense } from '@syncfusion/ej2-base';

// Register the Syncfusion license key
registerLicense('ORg4AjUWIQA/Gnt2XVhhQlJHfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hTH5SdkRhW3tedHRWQGZZ');

// Bootstrap the Angular application
bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));

  