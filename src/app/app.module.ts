// Import necessary Angular modules and components
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Root component

@NgModule({
    declarations: [
        // Declare all components, directives, and pipes here
        AppComponent,
    ],
    imports: [
        // Import other Angular modules or custom modules her

        BrowserModule,
    ],
    providers: [
        // List of services that will be available for dependency injection
    ],
    bootstrap: [AppComponent], // Root component to bootstrap when the app starts
})
export class AppModule {}
