import { TodoService } from './todo.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  service;
  newTodoTitle = "";

  constructor(service: TodoService) {
    this.service = service;
  }
}