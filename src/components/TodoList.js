import React from "react";
import TodoListItems from "./ToDoListItems";

function TodoList({todos,deleteTodo,startEditing,finishEditing}) {
    const items =todos.map(function(single_todo){
        return <TodoListItems key={single_todo.id} todo={single_todo} deleteTodo={deleteTodo} startEditing={startEditing} finishEditing={finishEditing}/>
    })

    return(
        <div>
            <ul className="container">
                {items}
            </ul>
        </div>
    );
}

export default TodoList;