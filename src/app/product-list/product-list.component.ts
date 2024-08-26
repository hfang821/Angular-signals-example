import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { Product } from 'src/product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [CommonModule],
  standalone: true
})
export class ProductListComponent {
  products = input.required<Product[]>()

  filteredProducts = computed(() => {
    return this.products().filter(product => product.name.includes("Milk"))
  })

}
