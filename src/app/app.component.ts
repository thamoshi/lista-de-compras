import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/item';
import { ShoppingListService } from './service/shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app-lista-de-compras';
  shoppingList!: Array<Item>;

  constructor(
    private shoppingListService: ShoppingListService
  ) { }

  ngOnInit(): void {
    this.shoppingList = this.shoppingListService.getListaDeCompra();
    console.log(this.shoppingList)
  }
}
