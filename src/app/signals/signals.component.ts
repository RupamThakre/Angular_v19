import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  standalone: true,
  imports: [NgFor],
})
export class SignalsComponent {
  actions: string[] = [];
  // counter = 0;
  counter = signal(0);

  increment() {
    // this.counter++;
   /*  
   3 Methods  
   .set() - adding a new value
   .update(oldValue => )- update based on oldvalue
   .mutate - based on old value
   */ 
    this.counter.update((oldCounter) => oldCounter + 1);


    //.set()
    this.counter.set(this.counter() + 1); //alternative of .update()

    //.mutate()

    this.actions.push('INCREMENT');
  }

  decrement() {
    // this.counter--;
    this.counter.update((oldCounter) => oldCounter -1);
    this.actions.push('DECREMENT');
  }
}
