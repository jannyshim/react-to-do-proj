import React from 'react';
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im'
import './TodoItem.css';

const TodoItem = ({ todo, onCheckButton, onInsertToggle, onChangeSelectedTodo }) => {
    const { id, text, checked } = todo;
    return (
        <div className='TodoItem'>
            <div className={`content ${checked ? 'checked' : ""}`}>
                {checked ?
                    <ImCheckboxChecked onClick={() => { onCheckButton(id) }} /> :
                    <ImCheckboxUnchecked onClick={() => { onCheckButton(id) }} />}
                <div className='text'
                    onClick={() => {
                        onChangeSelectedTodo(todo)
                        onInsertToggle()
                    }}>{text}</div>
            </div>
        </div>
    )
}

export default TodoItem;