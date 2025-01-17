import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment } from 'src/actions/counter/counter.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-global-store-example-app';

  count$: Observable<number>;

  constructor(
    private store: Store<{ count: number }>

  ) {

    this.count$ = store.select('count')

  }

  increment() {
    this.store.dispatch(increment())
  }
  decrement() {
    this.store.dispatch(decrement())
  }

}
