import React from "react"

// Todo型にcompletedプロパティを追加
type Todo = {
  id: string
  title: string
  completed: boolean
}

// changeStatus関数を追加
type Props = {
  todos: Todo[]
  deleteTodo: (index: number) => void
  changeStatus: (index: number) => void
}

const MyTodoList: React.FC<Props> = ({ todos, deleteTodo, changeStatus }) => {
  return (
    <ul className="space-y-3">
      {todos.map((todo, index) => (
        // Todo.completed=trueの時、背景色をgrayに、Todo.completed=falseの時、背景色をwhiteにする
        <li
          className={`flex justify-between p-2 border-l-4 rounded shadow ${
            todo.completed
              ? "bg-gray-400 border-blue-500"
              : "bg-white border-blue-500"
          }`}
          key={index}>
          <span>{todo.title}</span>

          <div>
            <button
              onClick={() => changeStatus(index)}
              className={
                todo.completed
                  ? "py-2 px-2 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                  : "py-2 px-2 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
              }>
              {todo.completed ? "Good" : "Completed"}
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
