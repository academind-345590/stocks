import { Component, OnInit } from '@angular/core';
// import dependencies
import { StocksService, StockInterface } from '../../services/stocks.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
//export the component class, but also implements the OnInit interface
export class DashboardComponent implements OnInit {
  //declares a property for hlding an array of stocks
  stocks: Array<StockInterface>;
  //declares a property for holding an array of stock symbols
  symbols: Array<string>;
  // gets the stocks symbols from the service when the cimponent is first constructed
  constructor(private service: StocksService) {
    this.symbols = service.get();
  }
  //implements the ngOInit methd and calls the service to load stock data over Http
  ngOnInit() {
    this.service.load(this.symbols).subscribe(stocks => this.stocks = stocks);
  }
}
