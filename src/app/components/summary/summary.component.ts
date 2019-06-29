// imports the dependencies
import { Component, Input } from '@angular/core';
//declares the component metadata
@Component({
  selector: 'summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
//exports the summary component class
export class SummaryComponent {

  //declared a property that is an input value
  @Input() stock: any;
  //method to check if stock is negative
  isNegative() {
    return (this.stock && this.stock.change < 0);
  }
  //method to check if stock is positive
  isPositive() {
    return (this.stock && this.stock.change > 0)
  }

}
