import { AfterViewInit, Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Products } from "../products/products";

@Component({
  selector: 'app-order',
  imports: [FormsModule, CommonModule, Products],
  templateUrl: './order.html',
  styleUrl: './order.css'
})
export class Order implements AfterViewInit {
  caregories : Icategory[];

  selectedCategoryId : number = 0;
 recivedtotalprice : number =0;

  @ViewChild("usernameinput") myinput ! :ElementRef;

  constructor () {

     this.caregories = [
      {id: 1,name: 'Laptops'},
      {id: 2,name: 'Mobiles '},
      {id: 3,name: ' Tablets'},
    ];
  }
  ngAfterViewInit(): void {
   console.log(this.myinput.nativeElement.value);
  }

  // this method will be called when event is fired from child component
  caltotalprice(top:number) 
  {
    this.recivedtotalprice = top;
  }
}
