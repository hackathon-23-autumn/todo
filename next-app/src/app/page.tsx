"use client"

import { useRouter } from "next/navigation"
import {signIn} from "next-auth/react"

import { signIn } from "next-auth/react"
import { useSession } from "next-auth/react"
import Image from "next/image"

const Home = () => {
  const { data: session } = useSession()
  const router = useRouter()

  return (
    <main>

      {!session && (
        <button
          type="button"
          className=" flex-col mt-2 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
          onClick={() =>
            signIn("github", {
              callbackUrl: "/todo", // ログイン成功後のリダイレクト先
            })
          }>
          Sign in
        </button>
      )}

    </main>
  )
}

export default Home
