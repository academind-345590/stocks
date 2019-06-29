// import dependencies
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// declares a stock array and API variables
let stocks: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];
let service: string = 'https://angular2-in-action-api.herokuapp.com';

//defines and exports the TypeScript interface for a stack object
export interface StockInterface {
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;
}


@Injectable()
export class StocksService {

  constructor(private http: HttpClient) { }

  // METHOD to get the stocks
  get() {
    return stocks.slice();
  }
  //method to add a new stock to list
  add(stock) {
    stock.push(stock);
    return this.get();
  }
  //method to remove a stock from list
  remove(stock) {
    stocks.splice(stocks.indexOf(stock), 1);
    return this.get();
  }
  //method to call HttpClient service to load stock values from API
  if(symbols) {
    return this.http.get<Array<StockInterface>>(service + '/stocks/snapshot?symbols=' + symbols.join());
  }
}
