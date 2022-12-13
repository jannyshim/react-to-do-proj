import React from 'react'
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({ todos, onCheckButton, onInsertToggle, onChangeSelectedTodo }) => {

    return (
        <div className='TodoList'>
            {todos.map(todo => (
                <TodoItem
                    todo={todo}
                    key={todo.id}
                    onCheckButton={onCheckButton}
                    onInsertToggle={onInsertToggle}
                    onChangeSelectedTodo={onChangeSelectedTodo} />))}
        </div>
    )
}

export default TodoList;