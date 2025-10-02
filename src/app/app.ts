import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./component/header/header";
import { Products } from "./component/products/products";
import { Footer } from './component/footer/footer';

@Component({
  selector: 'app-root',
  imports: [ Header, Products,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ecommerceApp');
}
