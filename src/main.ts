import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { registerLicense } from '@syncfusion/ej2-base';

// Register Syncfusion's license key to allow use of Syncfusion components
registerLicense('ORg4AjUWIQA/Gnt2XVhhQlJHfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hTH5SdkRhW3tedHRWQGZZ');

// Bootstrap the Angular application by specifying the root component and app config
bootstrapApplication(AppComponent, appConfig)
  .then(() => console.log('Application bootstrapped successfully'))  // Log success message
  .catch(err => console.error('Application bootstrap failed:', err));  // Log error if bootstrapping fails
