"use client"

import { useRouter } from "next/navigation"
import {signIn} from "next-auth/react"

const Home = () => {
  const router = useRouter()

  return (
    <main>
      {/*
      <label className="flex flex-col form-label text-4xl font-bold ">login</label>
      
      <input
        type="email"
        className="form-control w10 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
        placeholder="name@example.com"></input>
      */}
      <button
        type="button"
        className="flex flex-col mt-2 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
        onClick={() => signIn()}>
        Sign in
      </button>
    </main>
  )
}

export default Home
