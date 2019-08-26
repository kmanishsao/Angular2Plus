import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Home } from '../../core/state/home-state';
import { StoreReducers} from '../../core/reducers/reducers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string = "";
  constructor(private store: Store<Home>) { }

  ngOnInit() {
    this.store.select("Home").subscribe((data: Home) => {
      console.log( data.default);
      this.title =data.default;
    });
  }

}
