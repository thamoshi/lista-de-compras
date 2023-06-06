import { Item } from 'src/app/interfaces/item';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private shoppingList!: Item[]

  constructor() {
    this.shoppingList = JSON.parse(localStorage.getItem('items') || '[]')
  }

  getShoppingList(){
    return this.shoppingList;
  }

  createItem(itemName: string) {
    const id = this.shoppingList.length + 1 
    const item: Item = {
      id, 
      name: itemName,
      date: new Date().toLocaleString('pt-BR'),
      bought: false
    }
    return item
  }

  addItemToShoppingList(itemName: string) {
    const item = this.createItem(itemName)
    this.shoppingList.push(item)
  }

  editShoppingListItem(oldItem: Item, editedItemName: string) {
    const editedItem: Item = {
      id: oldItem.id,
      name: editedItemName,
      date: oldItem.date,
      bought: oldItem.bought
    }
    const id = oldItem.id

    this.shoppingList.splice(Number(id)-1, 1, editedItem);
  }

  buyShoppingListItem(item: Item) {
    const editedItem: Item = {
      id: item.id,
      name: item.name,
      date: item.date,
      bought: !item.bought
    }
    const id = item.id

    this.shoppingList.splice(Number(id)-1, 1, editedItem);
  }

  saveLocalStorage() {
    localStorage.setItem('items', JSON.stringify(this.shoppingList))
  }
}
