import React,{useState} from "react";
import TodoAdd from "./TodoAdd";
import ToDoAdd from "./TodoAdd";
import TodoList from "./TodoList";

function TodoContainer(){
    const[todos,setTodos] = useState([]);

    const getNewId = () => {
        let id =0;
        todos.map((item)=>{
            if(item.id>id){
                id=item.id;
            }
        });

        id+=1;
        return id;
    }

    const addTodo=newTodo=> {
        const newtodoObj={
            id:getNewId(),
            value: newTodo,
            isEditing: false
        }
        const updated_todos =[...todos,newtodoObj];
        setTodos(updated_todos);
    }


        const deleteTodo=todo_id=>{
            const filtered_arr =todos.filter(todo=>todo.id !== todo_id);
            setTodos(filtered_arr);
        }

        const startEditing=todo_id=>{
            const editing_arr=todos.map((item)=>{
                if(item.id===todo_id){
                    item.isEditing= true;
                }
                return item;
            });
            setTodos(editing_arr)
        }
        const finishEditing=todo=>{
            const editing_arr=todos.map((item)=>{
                if(item.id ===todo.id){
                    return todo;
                }
                return item;
            });
            setTodos(editing_arr);
        }
        return(
            <div>
                <h1>Todo Application</h1>
                <TodoAdd addTodo={addTodo}/>
                <TodoList todos={todos} deleteTodo={deleteTodo} startEditing={startEditing} finishEditing={finishEditing}/>
            </div>
        );
}

export default TodoContainer;
