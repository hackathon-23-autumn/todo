"use client"

import { useRouter } from "next/navigation"

const Home = () => {
  const router = useRouter()

  return (

    <main>
      <label className="form-label font-bold focus:border-blue-500">login</label>
      <input type="email" className="form-control w10 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="name@example.com"></input>
      <button
        type="button"
        className="mt-2 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
        onClick={() => router.push('/todo')}
      >
        Submit
      </button>
    </main>
  )
}

export default Home
