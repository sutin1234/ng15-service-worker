import { Component } from '@angular/core';
import { UploadService } from './upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-service-worker';
  constructor(private uploaderService: UploadService) { }

  async onFileChnage(e: any) {
    const file = e.target.files[0]
    const buf = await this.readFileAsArrayBuffer(file) as Blob
    if (buf)
      await this.uploaderService.displayRenamedPDF(file)
  }

  async readFileAsArrayBuffer(file: File | Blob) {
    return new Promise((resolve) => {
      const fd = new FileReader()
      fd.onload = ((e: any) => {
        resolve(e.target.result)
      })
      fd.readAsArrayBuffer(file)
    })

  }
}
