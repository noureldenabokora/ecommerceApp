import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./component/header/header";
import { Footer } from './component/footer/footer';
import { Order } from "./component/order/order";

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Order],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ecommerceApp');
}
