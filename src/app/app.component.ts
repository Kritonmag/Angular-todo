import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo';

  editingTaskIndex: number | null = null;
  editedTaskText: string = '';

  tasks = [
    { text: 'Купить продукты', completed: false },
    { text: 'Сделать todo', completed: false },
  ];

  markAsCompleted(task: any): void {
    task.completed = !task.completed;
  }

  deleteTask(task: any): void {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  startEditing(index: number): void {
    this.editingTaskIndex = index;
    this.editedTaskText = this.tasks[index].text;
  }

  saveEditedTask(index: number): void {
    this.tasks[index].text = this.editedTaskText;
    this.editingTaskIndex = null;
  }

  cancelEditing(): void {
    this.editingTaskIndex = null;
  }
}
