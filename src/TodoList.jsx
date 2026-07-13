import { useState } from "react"
import { v4 as uuidv4 } from "uuid";
export default function TodoList(){
    let [todos,settodos] = useState([
        {
            id: uuidv4(),
            task: "gym",
            isDone: false,
        }
    ]);
    let [newTodos,setnewTodos] = useState("");

    let addNewTasks = () =>{
        settodos((prevVal) =>{
            return[
                ...prevVal,
                {
                    id: uuidv4(),
                    task: newTodos,
                    isDone: false,
                }
            ]  
        })
        setnewTodos(""); 
        
    }
    let updateTodoValue = (event) =>{
        setnewTodos(event.target.value);
    };
    let deleteTodo = (id) => {
        settodos((prevTodos) =>
            prevTodos.filter(
                (todo) => todo.id !== id
            )
        );
    };
    let upperCaseAll = () => {
        settodos((prevTodos) =>
            prevTodos.map((todo) => {
                return {
                    ...todo,
                    task: todo.task.toUpperCase()
                };
            })
        );
    };
    let markDone = (id) => {
    settodos((prevTodos) =>
        prevTodos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    isDone: true,
                };
            } else {
                return todo;
            }
        })
    );
};
    return(
        <div>
            <input type="text"
                placeholder="add task" 
                value={newTodos}
                onChange={updateTodoValue}
            />
            <button 
                onClick={addNewTasks}>
                ADD TASK
            </button>
            <br /><br />
            <h2>Yours Tasks</h2>
            {
                <ul>
                    {
                        todos.map((todo) => (
                            <li key={todo.id}>
                                <span style={todo.isDone?{textDecorationLine: "line-through"}:{}}>
                                    {todo.task}
                                </span>

                                <button
                                    onClick={() => deleteTodo(todo.id)}
                                >
                                    Delete
                                </button>
                                <button
                                    onClick={() => markDone(todo.id)}
                                >
                                    mark as done
                                </button>
                            </li>
                        ))
                    }
                </ul>
            }
            <button onClick={upperCaseAll}>
                UpperCase All
            </button>
        </div>
    )
}