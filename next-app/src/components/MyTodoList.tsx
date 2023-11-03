import React from "react"

type Props = {
  todos: string[]
  deleteTodo: (index: number) => void
}

const MyTodoList: React.FC<Props> = ({ todos, deleteTodo }) => {
  return (
    <ul className="space-y-3">
      {todos.map((todo, index) => (
        <li
          className="flex justify-between p-2 bg-white border-l-4 border-blue-500 rounded shadow"
          key={index}>
          <span>{todo}</span>

          <div>
            <button className="py-2 px-2 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
              Completed
            </button>
            <button
              onClick={() => deleteTodo(index)}
              className="py-2 px-2 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default MyTodoList
