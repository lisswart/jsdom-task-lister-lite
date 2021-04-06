document.addEventListener("DOMContentLoaded", () => {
  
  const newTaskForm = document.getElementById("create-task-form");
  
  newTaskForm.addEventListener("submit", createNewTask);
});

const createNewTask = event => {
  event.preventDefault();  //stop form from trying to submit

  const newTaskDescription = document.getElementById("new-task-description");
  const priorityValues = document.getElementById('priority-values');
  const submit = document.getElementById('submit');
  
  submit.addEventListener('click', () => {

    if(priorityValues.value === 'red') {
      const newTask = document.createElement("li");
      const del = document.createElement('input');
      newTask.style = 'color: #f90909';
      del.type = 'checkbox';
      newTask.innerText = newTaskDescription.value;
      appendNewTask(newTask);
      appendCheckBox(del);
    } 
    else if(priorityValues.value === 'yellow') {
      const newTask = document.createElement("li");
      const del = document.createElement('input');
      newTask.style = 'color: yellow';
      del.type = 'checkbox';
      newTask.innerText = newTaskDescription.value;
      appendNewTask(newTask);
      appendCheckBox(del);
    }
    else if(priorityValues.value === 'green') {
      const newTask = document.createElement("li");
      const del = document.createElement('input');
      newTask.style = 'color: #41f909';
      del.type = 'checkbox';
      del.value = '';
      del.id = 'checkbox';
      newTask.innerText = newTaskDescription.value;
      appendNewTask(newTask);     
      appendCheckBox(del);
    }
  });

  event.target.reset();
};

const appendCheckBox = box => {
  document.getElementById('tasks').appendChild(box);
}

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};


