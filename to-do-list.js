const todo_1 = [{name: "make dinner",due_date : '20-12-2026'}];
render_todo();
function add_todo_1(){
    const input_element = document.querySelector('.input_1');
    const name = input_element.value;
    const input_date = document.querySelector('.input_date');
    const date = input_date.value;
    console.log(name);
    todo_1.push({name: name, due_date: date});
    // console.log(todo_1);
    input_element.value = '';
    input_date.value = '';
    render_todo();
}
function render_todo(){
    let to_do_list_html = '';
    for(let i=0;i<todo_1.length;i++){
        const todoObject = todo_1[i];
        const name = todoObject.name;
        const due_date = todoObject.due_date;
        // const {name,due_date}= todoObject;
        const html = 
        `<div class="column_name">${name}</div>
        <div class="column_date"> ${due_date}</div>
        <button class="delete" onclick = " 
        todo_1.splice(${i},1);
        render_todo();
        ">Delete</button>`;
        to_do_list_html += html;
    }
    // console.log(to_do_list_html);
    document.querySelector('.js-todo-list').innerHTML = to_do_list_html;

}


