window.addEventListener('load' , function(){
    const form = document.querySelector('.form');
    const todosContainer = document.querySelector('.todos-container');
    const todoInput = document.querySelector('.todo-input');

    form.addEventListener('submit' , function(event){
        event.preventDefault();

        if(todoInput.value === ''){
            alert(`please enter a todo!`)
            return;
        }
        
        const section = document.createElement('div');
        section.classList.add('todo-wrapper');
        
        const taskInput = document.createElement('input');
        taskInput.type = 'text';
        taskInput.classList.add('my-todo');
        taskInput.value = todoInput.value;
        taskInput.setAttribute('readonly' , 'readonly');
        section.appendChild(taskInput);
        

        const actions = document.createElement('div');
        actions.classList.add('actions');
        section.appendChild(actions);

        const editBtn = document. createElement('button');
        editBtn.classList.add('edit');
        editBtn.innerText = 'EDIT';
        actions.appendChild(editBtn);

        const deleteBtn = document. createElement('button');
        deleteBtn.classList.add('delete');
        deleteBtn.innerText = 'DELETE';
        actions.appendChild(deleteBtn);

        todosContainer.appendChild(section);
        todoInput.value = '';


        editBtn.addEventListener('click' , () =>{
            if(editBtn.innerText == 'EDIT'){
                taskInput.removeAttribute('readonly');
                taskInput.focus();
                editBtn.innerText = 'SAVE';
            }else{
                taskInput.setAttribute('readonly' , 'readonly');
                editBtn.innerText = 'EDIT';
            };
        })

        deleteBtn.addEventListener('click' , () =>{
            section.remove();
        })
    })
});