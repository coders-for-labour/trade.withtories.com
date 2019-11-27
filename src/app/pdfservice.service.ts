import { Injectable } from '@angular/core';
import { PDFs } from './const/pdf';

@Injectable({
  providedIn: 'root'
})
export class PdfserviceService {

  constructor() { }

  getPDFs(){
    return PDFs;
  }
}
