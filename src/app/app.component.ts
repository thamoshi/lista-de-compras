import { Component, DoCheck, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/item';
import { ShoppingListService } from './service/shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'app-lista-de-compras';
  shoppingList!: Array<Item>;
  editingItem!: Item;

  constructor(
    private shoppingListService: ShoppingListService
  ) { }
  ngDoCheck(): void {
    this.shoppingListService.saveLocalStorage()
  }

  ngOnInit(): void {
    this.shoppingList = this.shoppingListService.getShoppingList();
    console.log(this.shoppingList)
  }

  editItem(item: Item) {
    this.editingItem = item
  }

  deleteItem(id: number) {
    const index = this.shoppingList.findIndex((item) => item.id === id)
    console.log(index)
    this.shoppingList.splice(index, 1)
  }

  clearShoppingList() {
    this.shoppingList = []
  }
}
