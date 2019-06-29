import { Component } from '@angular/core';
// import the stockinterface
import { StocksService, StockInterface } from './services/stocks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //declares a proporty of an array of stocks
  stocks: Array<StockInterface>;

  constructor(service: StocksService) {
    service.load(['AAPL']).subscribe(stocks => {
      //when the data loads, it will store it on the stocks property
      this.stocks = stocks;
    });
  }

}
