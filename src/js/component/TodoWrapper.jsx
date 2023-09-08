import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from 'uuid';
import { Todo } from "./Todo";

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
       
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
        console.log(todos)
    }
    
    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }
    const deleteTodo = id => {
    
        setTodos(todos.filter(todo => todo.id !== id))
    }
    
    const itemsLeft = todos.filter(todo => !todo.completed).length; 
    
    return (
        <>
        <p className="title">My todos</p>
        <div className='TodoWrapper'>
           
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
            ))}
            <p className="items-left">{itemsLeft} {itemsLeft === 1 ? 'item' : 'items'} left</p>
        </div>
        </>
    )
}
