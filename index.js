const input = document.getElementById('taskInput');
const list = document.getElementById('taskList');
    
input.addEventListener('keydown', function(e){
    if(e.key === 'Enter' && input.value.trim() !== ''){
        const li = document.createElement('li');
        li.textContent = input.value.trim();
        list.prepend(li);
        input.value = '';
    }
});