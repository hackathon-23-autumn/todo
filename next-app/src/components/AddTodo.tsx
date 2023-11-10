import React from "react"

// changeTextとaddTodosを受け取る (props)
// Props(reactのコンポーネントの型定義) = (引数) => (返り値)
type Props = {
  // textという文字列、changeTextという関数、addTodosという関数を受け取るオブジェクト
  changeText: (e: React.ChangeEvent<HTMLInputElement>) => void
  addTodos: () => void
  text: string
}

// React.FC<Props>…Reactの関数コンポーネントの型（Props）を宣言
const AddTodo: React.FC<Props> = ({ text, changeText, addTodos }) => {
  // フォームが送信されたときに実行される関数
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault() // ページのリロードを防ぐ
    // フォームがからの場合
    if (!text.trim()) {
      alert("Todoは空では追加できません")
      return
    }
    // changeTextの内容をJSONデータとして/api/todosにPOSTする
    const response = await fetch(`/api/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ todo: text }),
    })
    const data = await response.json()
    console.log(data)
    addTodos() // addTodos()を呼び出して新しいTodoを追加する
  }

  return (
    <form className="mt-4 mb-4" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={changeText}
        className='w-full py-2 px-2 border-gray-200 form-control w10 text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"'
      />
      <button
        type="submit"
        className="w-full mt-2 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
        Add
      </button>
    </form>
  )
}

export default AddTodo
