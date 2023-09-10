import { Component } from '@angular/core';

interface Task {
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'todo';

  editingTaskIndex: number | null = null;
  editedTaskText: string = '';
  newTask = '';

  tasks: Task[] = [
    {
      title: 'Купить хлеб, воду, печенье',
      completed: false
    },
    {
      title: 'Помыть посуду, пылесосить',
      completed: false
    },
    {
      title: 'Приготовить пасту с соусом и салат',
      completed: false
    }
  ];

  markAsCompleted(task: Task): void {
    task.completed = !task.completed;
  }

  deleteTask(task: Task): void {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  startEditing(index: number): void {
    this.editingTaskIndex = index;
    this.editedTaskText = this.tasks[index].title;
  }

  saveEditedTask(index: number): void {
    this.tasks[index].title = this.editedTaskText;
    this.editingTaskIndex = null;
  }

  cancelEditing(): void {
    this.editingTaskIndex = null;
  }

  addNewTask(): void {
    if (this.newTask.trim() !== '') {
      const newTaskObject = {
        title: this.newTask,
        completed: false
      };
      this.tasks.unshift(newTaskObject);
      this.newTask = '';
    }
  }
}
