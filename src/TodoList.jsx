import { useState } from "react"
import { v4 as uuidv4 } from "uuid";
export default function TodoList(){
    let [todos,settodos] = useState([
        {
            id: uuidv4(),
            task: "gym"
        }
    ]);
    let [newTodos,setnewTodos] = useState("");

    let addNewTasks = () =>{
        settodos((prevVal) =>{
            return[
                ...prevVal,
                {
                    id: uuidv4(),
                    task: newTodos
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
    let UpperCaseOne = (id) => {
    settodos((prevTodos) =>
        prevTodos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    task: todo.task.toUpperCase(),
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
                                {todo.task}

                                <button
                                    onClick={() => deleteTodo(todo.id)}
                                >
                                    Delete
                                </button>
                                <button
                                    onClick={() => UpperCaseOne(todo.id)}
                                >
                                    UpperCase One
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