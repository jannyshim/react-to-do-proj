import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Template from './components/To-do/Template';
import TodoList from './components/To-do/TodoList';
import CreateTodo from './components/To-do/CreateTodo';
import { GrAddCircle } from 'react-icons/gr';

let nextId = 2;

function App() {
  const [selectedTodo, setSelectedTodo] = useState(null)
  const [insertToggle, setInsertToggle] = useState(false)
  const [todos, setTodos] = useState([{
    "id": 1,
    "text": "할일1",
    "checked": true
  }]);

  const onInsertToggle = () => {
    if (selectedTodo) {
      setSelectedTodo(null)
    }
    setInsertToggle(prev => !prev)
  }

  const onCreateTodo = text => {
    if (text === "") {
      return alert('할 일을 입력해주세요')
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false
      }
      setTodos(todos => todos.concat(todo));
      nextId++
    }
  }

  const onCheckButton = (id) => {
    setTodos(todos => todos.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo))
  }

  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo)
  }

  const onRemove = id => {
    onInsertToggle();
    setTodos(todos => todos.filter(todo => todo.id !== id))
  }

  const onUpdate = (id, text) => {
    onInsertToggle();
    setTodos(todos => todos.map(todo => (todo.id === id ? { ...todo, text } : todo))
    )
  }

  return (
    <div>
      <Template todoLength={todos.length}>
        <TodoList
          todos={todos}
          onCheckButton={onCheckButton}
          onInsertToggle={onInsertToggle}
          onChangeSelectedTodo={onChangeSelectedTodo} />
        <div className='add-todo-button' onClick={onInsertToggle}>
          <GrAddCircle />
        </div>
        {insertToggle && (
          <CreateTodo
            selectedTodo={selectedTodo}
            onInsertToggle={onInsertToggle}
            onCreateTodo={onCreateTodo}
            onRemove={onRemove}
            onUpdate={onUpdate} />)}
      </Template>
      <Footer />
    </div>

  );
}

export default App;