import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor() { }

  async displayRenamedPDF(file: File | Blob, filename = 'myPdf.pdf') {
    const reg_path = '/name-forcer/';
    const url = reg_path + filename;
    const store = await caches.open('name-forcer');
    await store.put(url, new Response(file));
    const frame = document.createElement('iframe');
    frame.style.width = '100%';
    frame.style.height = '100vh';
    document.body.append(frame);
    frame.src = url;
    window.open(url, '_blank')
    // console.log(file, frame)
  }
}
