import { Component, EventEmitter, Input, OnChanges, Output, output, SimpleChanges } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { HighlightCard } from '../../dirctives/highlight-card';
import { SquarePipe } from '../../pipes/square-pipe';
import { StaticProducts } from '../../services/static-products';

@Component({
  selector: 'app-products',
  imports: [CommonModule,FormsModule,HighlightCard ,SquarePipe],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements  OnChanges {
  products : Iproduct[];
  filteredProducts : Iproduct[] =[];
  totalOrderPrice :number = 0;
  selectedCategoryId : number = 0;
  numn : number = 4;

   @Input() recivedcatId: number = 0;

  // define event
   @Output() onTotalPriceChanged:EventEmitter<number>;


  constructor(private _staticProducts: StaticProducts) {
              
    this.products = this._staticProducts.getAllProducts();
   
    this.filteredProducts = this.products;
  
    // intial value
     this.onTotalPriceChanged = new EventEmitter<number>();
  }
  ngOnChanges(): void {
  // this.filterProducts();
  this.filteredProducts= this._staticProducts.getProductsByCategoryId(this.recivedcatId);
  }

  buy(count: string, price: number) {
    this.totalOrderPrice += parseInt(count) * price;
    // fire event
    this.onTotalPriceChanged.emit(this.totalOrderPrice);
    alert(' Total Price: ' + this.totalOrderPrice);
  }

  // filterProducts() {
  //   if (this.recivedcatId == 0) {
  //     this.filteredProducts = this.products;
  //   } else {
  //     this.filteredProducts = this.products.filter(
  //       (product) => product.catId ==this.recivedcatId
  //     );
  //   }
  // }
}
