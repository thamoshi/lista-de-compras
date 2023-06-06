import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/interfaces/item';
import { ShoppingListService } from 'src/app/service/shopping-list.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {
  @Input() editingItem!: Item
  isEditing = false
  btnText = 'Salvar item'

  itemName!: string

  constructor(
    private shoppingListService: ShoppingListService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['editingItem'].firstChange) {
      this.isEditing = true
      this.btnText = 'Editar item'
      this.itemName = this.editingItem?.name
    }
  }

  ngOnInit(): void { }

  addItem() {
    this.shoppingListService.addItemToShoppingList(this.itemName)
    this.clear()
  }

  editItem() {
    this.shoppingListService.editShoppingListItem(this.editingItem, this.itemName)
    this.clear()
    this.isEditing = false
    this.btnText = 'Salvar item'
  }

  clear(){
    this.itemName = ''
  }
}
