import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/item';
import { ShoppingListService } from 'src/app/service/shopping-list.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() item!: Item
  @Output() editItemEvent = new EventEmitter()
  @Output() deleteItemEvent = new EventEmitter()

  faPen = faPen;
  faTrash = faTrash

  constructor(
    private shoppingListService: ShoppingListService
  ) { }
  ngOnDestroy(): void {
    console.log('item component: onDestroy');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('item component: onChange')
  }

  ngOnInit(): void {
    console.log('item component: onInit')
  }

  editItem() {
    this.editItemEvent.emit(this.item)
  }

  buyItem() {
    this.shoppingListService.buyShoppingListItem(this.item)
  }

  deleteItem() {
    this.deleteItemEvent.emit(this.item.id)
  }

}
