class Task {
    constructor(description, completed = false) {
      this.description = description;
      this.completed = completed;
    }
  }
  
  class UI {
    constructor() {
      this.form = document.getElementById('form');
  
      this.description = document.getElementById('task-input');
      this.tableBody = document.getElementById('table-body');
    
      this.form.addEventListener('submit', (e) => this.onFormSubmit(e));
  
      this.tasks = this.loadTasksFromLocalStorage();
  
      this.renderTaskTable();
    }
  
    onFormSubmit(e) {
      e.preventDefault();
  
      if (this.description.value == '' ) {
        return;
      }
  
      const task = new Task(this.description.value);
      this.tasks.push(task);
      this.saveTasksToLocalStorage();
      this.renderTaskTable();
  
      this.description.value = '';
    }
  
    renderTaskTable() {
      this.tableBody.innerHTML = '';
  
      for (let i = 0; i < this.tasks.length; i++) {
        const task = this.tasks[i];
  
        const tr = this.createTaskTableRow(task);
        this.tableBody.appendChild(tr);
      }
    }
  
    createTaskTableRow(task) {
      const tr = document.createElement('tr');
  
      const tdDescription = document.createElement('td');
      const tdComplete = document.createElement('td');
      const tdDelete = document.createElement('td');
  
      tdDescription.innerHTML = task.description;
      
  
      const actionButtons = this.createActionButtons(task,tr);
      tdComplete.appendChild(actionButtons[0]);
      tdDelete.appendChild(actionButtons[1]);
  
      tr.appendChild(tdDescription);
      tr.appendChild(tdComplete);
      tr.appendChild(tdDelete);
  
      return tr;
    }
  
    createActionButtons(task, row) {
      const completeButton = document.createElement('input');
      const deleteButton = document.createElement('button');
  
      completeButton.setAttribute('class', 'form-check-inline form-check-input me-1');
      completeButton.setAttribute('type', 'radio');
      completeButton.setAttribute('id', 'inlineRadio1');

      completeButton.checked = task.completed;
      completeButton.addEventListener('click', () => {
        task.completed = !task.completed;
        completeButton.checked =task.completed;
        this.saveTasksToLocalStorage();
      });

      deleteButton.setAttribute('class', 'btn btn-sm me-1');
      deleteButton.innerHTML = '<i class="bi bi-trash"></i>';
      deleteButton.addEventListener('click', () => {
        const row = deleteButton.closest('tr');
        const index = Array.from(row.parentNode.children).indexOf(row);
        this.tasks.splice(index, 1);
        this.saveTasksToLocalStorage
        this.renderTaskTable();
      });

      return [completeButton, deleteButton];
    }

    loadTasksFromLocalStorage() {
      const tasks = JSON.parse(localStorage.getItem('tasks'));
      return tasks ? tasks.map(task => new Task(task.description, task.completed)) : [];
    }

    saveTasksToLocalStorage() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }


  }
  
  const ui = new UI();