import { Component, OnInit } from '@angular/core';
import { PdfserviceService } from './pdfservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'Trade With Tories';

  constructor(private pdfService:PdfserviceService){}

  pdfs:any[];

  ngOnInit(){
    this.pdfs = this.pdfService.getPDFs();
  }

  getUrl(pdf:any){
    return "assets/pdf/" + pdf.url;
  }

  setPdf(pdf:any){

  }
}
