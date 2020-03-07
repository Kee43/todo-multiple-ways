import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo App Angular';
  todoItems = [];
  newItemText = '';

  addItem() {
    if (this.newItemText) {
      this.todoItems.push({text: this.newItemText, isDone: false});
      this.newItemText = '';
    }
  }
}
