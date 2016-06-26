import { Component } from '@angular/core';
//import { RouterConfig, ROUTER_DIRECTIVES } from '@angular/router';
import {TodosComponent} from "./todos/index";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [TodosComponent],
  providers: []
})
// @RouterConfig([
//   { path: '/home', component: HomeComponent, name: 'Home' }
// ])
export class AppComponent {
  title = "Todo Demo App for SoCal Code Camp";
}
