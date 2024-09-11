import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

import 'zone.js';

// old bootstrap
// platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));

// new bootstrap

platformBrowserDynamic().bootstrapModule(AppModule, { ngZoneEventCoalescing: true, ngZoneRunCoalescing: true }).catch(bootstrapFailed);

function bootstrapFailed(val: any) {
    console.error('bootstrap-fail', val);
}
