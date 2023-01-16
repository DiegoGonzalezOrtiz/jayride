import { Component, OnInit } from '@angular/core';
import { QuoteRequestService } from '../services/quote-request.service';

@Component({
  selector: 'app-quote-request',
  templateUrl: './quote-request.component.html',
  styleUrls: ['./quote-request.component.scss']
})
export class QuoteRequestComponent implements OnInit{
  listings : any[] = new Array;
  averagePrice=0;
  constructor(private quoteRequestService: QuoteRequestService){

  }
  ngOnInit(): void {
    this.quoteRequestService.getQuoteRequest().subscribe(
      (resp: any)=>{
        this.listings= resp.listings;
        this.listings= this.listings.filter(
             (item)=>{
              const maxPassengers= item.vehicleType.maxPassengers;
              if(maxPassengers>2){
                return(maxPassengers);
              }
             }
        );
        this.listings.sort((a,b) => (a.pricePerPassenger < b.pricePerPassenger)?-1:1);
        this.listings.forEach(
          (item)=> {
            this.averagePrice=this.averagePrice+item.pricePerPassenger;
          }
        );
        this.averagePrice=this.averagePrice/this.listings.length;
      }
    );
  }
}
