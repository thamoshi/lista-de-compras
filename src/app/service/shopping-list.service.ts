import { Item } from 'src/app/interfaces/item';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private shoppingList: Item[] = [
    {
      id: 1,
      name: "Queijo prato",
      date: "Segunda-feira (31/10/2022) às 08:30",
      bought: false
    },
    {
      id: 2,
      name: "Leite integral",
      date: "Segunda-feira (31/10/2022) às 08:30",
      bought: false
    },
    {
      id: 3,
      name: "Mamão papaia",
      date: "Segunda-feira (31/10/2022) às 08:30",
      bought: true
    },
  ]

  constructor() {
    console.log('Instanciando dependências necessárias para o serviço.');
  }

  getListaDeCompra(){
    return this.shoppingList;
  }
}
