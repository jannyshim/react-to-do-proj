import React, { useEffect, useState } from 'react';
import { GrAddCircle } from 'react-icons/gr'
import { BiTrash, BiPencil } from 'react-icons/bi'
import './CreateTodo.css';


const CreateTodo = ({ onInsertToggle, onCreateTodo, selectedTodo, onRemove, onUpdate }) => {
    const [value, setValue] = useState('');

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onCreateTodo(value);
        setValue('');
        onInsertToggle();
    }

    useEffect(() => {
        if (selectedTodo) {
            setValue(selectedTodo.text)
        }
    }, [selectedTodo])

    return (
        <div>
            <div className="background" onClick={onInsertToggle}></div>
            <form onSubmit={selectedTodo ? () => { onUpdate(selectedTodo.id, value) } : onSubmit}>
                <input placeholder='할일을 입력하세요' value={value} onChange={onChange}></input>
                {selectedTodo ? (<div className='rewrite'>
                    <BiPencil onClick={() => { onUpdate(selectedTodo.id, value) }} />
                    <BiTrash onClick={() => { onRemove(selectedTodo.id) }} />
                </div>) :
                    (<button type='submit'>
                        <GrAddCircle />
                    </button>)}
            </form>
        </div>
    )
}

export default CreateTodo;