import React, {useState, useEffect} from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
uuidv4();

export const TodoWrapper = () => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    const [todos, setTodos] = useState(savedTodos)

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = todo => {
        const newTodo = {id: uuidv4(), task: todo, completed: false, isEditing: false}
        setTodos([...todos, newTodo])
    }

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <div className='TodoWrapper'>
            <h1>To Do List</h1>
            <h2>click on a task to cross it out!</h2>
            <hr></hr>
            <TodoForm addTodo={addTodo}/>
            {todos.map((todo, index) => (
                <Todo task={todo} key={index}
                toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
            ))}
        </div>
    )
}
