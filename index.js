const taskBtn = document.querySelector('.todo-btn');
const taskInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.list-container');



taskBtn.addEventListener('click',addTask);


taskInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });

function addTask()
{
    if(taskInput.value === '')
    {
        alert('Please Add a Task');
    }
    else
    {
        const newTask = document.createElement('li');
        newTask.classList.add('tasks');
        newTask.innerHTML = `<input type="checkbox" class="task-checkbox"><span>${taskInput.value}</span><button class='trash fa-solid fa-trash'></button>`;

        todoList.appendChild(newTask);
        
        taskInput.value = '';

        const checkbox = newTask.querySelector('.task-checkbox');
        checkbox.addEventListener('change',function(){
            if(checkbox.checked)
            {
                newTask.classList.add('checked');
            }
            else
            {
                newTask.classList.remove('checked')
            }
        })

        const trash = newTask.querySelector('.trash');
        trash.addEventListener('click',function(){
            newTask.remove();
        })
    }


    

}

