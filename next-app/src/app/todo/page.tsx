'use client'

import { AppRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import Link from 'next/link';
import router, { useRouter } from 'next/router';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const Todo = () => {

  const [text,setText] = useState<string>('')
  const [todos, setTodos] = useState<string[]>([]);

  const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    console.log(text)
  };

  const addTodos = () => {
    const newTodos = [...todos];
    newTodos.push(text);
    setTodos(newTodos);
    setText("");
  };

  const deleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <main>
      <label className="form-label">todo</label>
      <div>
      <input type="text" className="form-label" value={text} onChange={changeText} />
      <Button variant="primary"  onClick={addTodos}>add</Button>
      </div>

      <div>
        <ul>
        {todos.map((todo, index) => (
            <li key={todo}>
             {todo}
              <Button variant="primary" onClick={() => deleteTodo(index)}>done</Button>
            </li>
          ))}
        </ul>
      </div>
    </main>

  )
}

export default Todo;