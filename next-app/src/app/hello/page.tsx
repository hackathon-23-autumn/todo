"use client"
import React, { useEffect, useState } from "react"

type Todo = {
  id: string
  title: string
  completed: boolean
  name: string
}

export default function UsersList() {
  const [todos, setTodo] = useState<Todo[]>([])

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("/api/hello")
      const data = await response.json()
      setTodo(data)
    }

    fetchUsers()
    console.log(fetchUsers())
  }, [])

  return (
    <>
      <h2 className="text-lg font-bold mt-4">ユーザ一覧</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
    </>
  )
}
