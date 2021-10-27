import { Injectable } from '@angular/core';
import { TodoItem } from './todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosList: TodoItem[] = [
    {title: "Press a clock icon to postpone tasks", isCompleted: false, isPostponed: false},
    {title: "and they will disappear for now.", isCompleted: false, isPostponed: false},
    {title: "You can restore them by clicking a 'Restore postponed' button below,", isCompleted: false, isPostponed: false},
    {title: "but click an 'x' icon", isCompleted: false, isPostponed: false},
    {title: "and they will disappear forever.", isCompleted: false, isPostponed: false}
  ];

  toggleCompleted(todoItem: TodoItem) {
    todoItem.isCompleted = !todoItem.isCompleted;
  }

  togglePostponed(todoItem: TodoItem) {
    todoItem.isPostponed = !todoItem.isPostponed;
  }

  restorePostponed() {
    for (let todo of this.todosList) {
        todo.isPostponed = false;
    }
  }

  delete(todoItem: TodoItem) {
    let index = this.todosList.indexOf(todoItem);
    this.todosList.splice(index, 1);
  }

  deleteCompleted() {
    for (let i = this.todosList.length-1; i>=0; i--) {
      let todo = this.todosList[i];
      if (todo.isCompleted) {
        this.delete(todo);
      }
    }
  }

  addItem(itemTitle: string) {
    if(itemTitle.trim() !== "") {
      this.todosList.push({title: itemTitle, isCompleted: false, isPostponed: false});
    }
  }
}
