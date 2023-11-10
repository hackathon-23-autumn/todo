"use client"

import { useEffect, useState } from "react" // テキスト入力とTodoリストの状態管理
import AddTodo from "@/components/AddTodo"
import MyTodoList from "@/components/MyTodoList"
import Link from "next/link"

type Todo = {
  id: string
  todo: string
  completed: boolean
}

const Todo = () => {
  const [text, setText] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  // テキスト入力フィールドに入力された値をテキストの状態に設定する
  const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
    console.log(text)
  }

  // テキスト入力フィールドに入力された値をTodoリストに追加する (追加後にテキスト入力フィールドを空にする)
  const addTodos = () => {
    const newTodos = [...todos]
    newTodos.push({
      id: new Date().getTime().toString(),
      todo: text,
      completed: false,
    })
    setTodos(newTodos)
    setText("")
  }

  // Todoリストから選択されたTodoを削除する
  const deleteTodo = async (index: number) => {
    // Todo削除のAPIを送信
    const todo = todos[index]
    const response = await fetch(`/api/todos/${todo.id}`, {
      method: "DELETE",
    })
    if (response.ok) {
      const newTodos = [...todos]
      newTodos.splice(index, 1)
      setTodos(newTodos)
      const data = await response.json()
      console.log(data)
    }
  }

  // Todoのstatusを変更する
  const changeStatus = async (index: number) => {
    // Todoのstatus変更のAPIを送信
    const todo = todos[index]
    const response = await fetch(`/api/todos/${todo.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: !todo.completed }),
    })
    if (response.ok) {
      const updatedTodo = { ...todo, completed: !todo.completed }
      const newTodos = [
        ...todos.slice(0, index),
        updatedTodo,
        ...todos.slice(index + 1),
      ]
      setTodos(newTodos)
      const data = await response.json()
      console.log(data)
    }
  }

  // ページ読み込み時に1度だけ、fetchData関数を呼び出し、TodoリストをAPIから非同期に取得する
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/todos")
      if (response.ok) {
        const jsonData: Todo[] = await response.json()
        const todoArray: string[] = jsonData.map((item) => item.todo)
        setTodos(jsonData)
      } else {
        console.error("API request failed")
      }
    }

    fetchData()
  }, [])

  return (
    <main className="flex-col py-2 px-4">
      <label className="form-label text-4xl font-bold">todo</label>
      <div className="w-full py-6 px-8 bg-slate-200 shadow-md rounded-lg">
        <AddTodo changeText={changeText} addTodos={addTodos} text={text} />
        <MyTodoList
          todos={todos}
          deleteTodo={deleteTodo}
          changeStatus={changeStatus}
        />
      </div>

      <Link href="/" className="form-label text-lg font-bold">
        back
      </Link>
    </main>
  )
}

export default Todo
