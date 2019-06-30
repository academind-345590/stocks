//import dependence
import { Component } from '@angular/core';
import { StocksService } from '../../services/stocks.service';

//declares component metadata
@Component({
  selector: 'manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
// defines class and two properties for storing the array of symbols and a string for input
export class ManageComponent {
  symbols: Array<string>;
  stock: string;

  // get the current list of symbols duting class instantiation
  constructor(private service: StocksService) {
    this.symbols = service.get();
  }

  //method to sdd a new stock to the list
  add() {
    this.symbols = this.service.add(this.stock.toUpperCase());
    this.stock = '';
  }

  // method to remove a stock symbol from the list
  remove(symbol) {
    this.symbols = this.service.remove(symbol);
  }
}
