"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

type Todo = {
  id: string
  todo: string
  completed: boolean
}

const Todo = () => {
  const [text, setText] = useState<string>("")
  const [todos, setTodos] = useState<string[]>([])

  const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
    console.log(text)
  }

  const addTodos = () => {
    const newTodos = [...todos]
    newTodos.push(text)
    setTodos(newTodos)
    setText("")
  }

  const deleteTodo = (index: number) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/todos")
      if (response.ok) {
        const jsonData: Todo[] = await response.json()
        const todoArray: string[] = jsonData.map((item) => item.todo)
        setTodos(todoArray)
      } else {
        console.error("API request failed")
      }
    }

    fetchData()
  }, [])

  return (
    <main>
      <label className="form-label">todo</label>
      <div>
        <input
          type="text"
          className="form-label"
          value={text}
          onChange={changeText}
        />
        <button onClick={addTodos}>
          add
        </button>
      </div>

      <div>
        <ul>
          {todos.map((todo, index) => (
            <li key={todo}>
              {todo}
              <button onClick={() => deleteTodo(index)}>
                done
              </button>
            </li>
          ))}
        </ul>
        <Link href="/">back</Link>
      </div>
    </main>
  )
}

export default Todo
