import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ServiceWorkerModule } from '@angular/service-worker';
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadService } from './upload.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('custom-sw.js', {
      enabled: true,
      registrationStrategy: 'registerWhenStable:30000'
    }),
    PdfJsViewerModule
  ],
  providers: [UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
