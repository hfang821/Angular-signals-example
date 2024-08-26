import { Component } from '@angular/core';
import { signal, effect, computed } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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

}