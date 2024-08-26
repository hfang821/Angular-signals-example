import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { signal, effect, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, CommonModule]
})
export class AppComponent {
  title = 'angular-signals-exmaple';

  theme = signal("light");

  // getting the value of our theme signal
  label = this.theme();

  constructor(){
    effect(() => {
      // Similar to useEffect in React, this will run every time the theme signal changes
      this.label = this.theme();
    })
  }

  toggleDarkMode(){
    this.theme.update((currentValue) => {
      return currentValue === 'light' ? 'dark' : 'light';
    })
  }


  price = 19;
  quantity = signal(10);

  totalPrice = computed(() => {
    return this.price * this.quantity();
  })

  changeQuantity(event: Event){
    this.quantity.set((event.target as HTMLInputElement).valueAsNumber)
  }


  products = signal([
    {id: 1, name: 'Milk', price: 2.99},
    {id: 2, name: 'Bread', price: 1.99},
    {id: 3, name: 'Eggs', price: 3.99},
  ])

  filterName = signal('');

  filteredProducts = computed(() => {
    return this.products().filter(product => product.name
      .toLocaleLowerCase()
      .includes(this.filterName().toLocaleLowerCase()))
  });

  changeFilter(event: Event) {
    let newFilterName = (event.target as HTMLInputElement).value;
    this.filterName.set(newFilterName);
  }

}