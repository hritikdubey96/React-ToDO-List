import { useState } from 'react';

export default function TodoList() {
    // 1. Array state to hold multiple todos
    const [todos, setTodos] = useState(["Eat", "Gym", "Code"]); 
    // 2. String state to track what the user types in the input box
    const [newTodo, setNewTodo] = useState("");

    // Function to handle typing in the input box
    const updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };
    const addNewTask = () => {
            if (newTodo.trim() === "") return; // Don't add empty tasks

            // Create a new array with all old todos + the new one
            setTodos([...todos, newTodo]);
            setNewTodo(""); // Clear the input box after adding
        };
            return (
            <div style={{ padding: '20px', color: 'white', backgroundColor: '#2c3036', minHeight: '100vh' }}>
                <h2>Todo List</h2>
                
                {/* Input field and Add button */}
                <input 
                    type="text" 
                    placeholder="Add a task" 
                    value={newTodo} 
                    onChange={updateTodoValue}
                    style={{ padding: '8px', marginRight: '10px' }}
                />
                <button onClick={addNewTask} style={{ padding: '8px 12px' }}>Add Task</button>
                
                <hr />
                
                {/* Rendering the array */}
                <ul>
                    {todos.map((todo, index) => (
                        <li key={index}>{todo}</li> 
                    ))}
                </ul>
            </div>
        );
    }