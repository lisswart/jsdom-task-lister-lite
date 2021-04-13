document.addEventListener("DOMContentLoaded", () => {
  
  const newTaskForm = document.getElementById("create-task-form");
  
  newTaskForm.addEventListener("submit", createNewTask);
});

const createNewTask = event => {
  event.preventDefault();  //stop form from trying to submit

  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;

  const priorityValues = document.getElementById('priority-values');
  if(priorityValues.value === 'red') {        
    newTask.style = 'background-color: #f90909';        
    newTask.innerText = newTaskDescription.value;
  } 
  else if(priorityValues.value === 'yellow') {
    newTask.style = 'background-color: #f7c709';
    newTask.innerText = newTaskDescription.value;
  }
  else if(priorityValues.value === 'green') {
    newTask.style = 'background-color: #41f909';
    newTask.innerText = newTaskDescription.value;    
  }

  appendNewTask(newTask);
  event.target.reset();

  const removeTask = document.createElement('input');
  removeTask.value = "x";
  removeTask.type = "button";
  removeTask.id = "remove-button";
  removeTask.addEventListener("click", event => newTask.parentNode.removeChild(newTask), false);
  newTask.appendChild(removeTask);
};

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};
