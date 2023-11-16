import { PrismaClient, Todo } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"

const prisma = new PrismaClient()

export async function GET() {
  // todoテーブルから全件取得
  const todos: Todo[] = await prisma.todo.findMany({
    where: {
      user: {
        name: "Alice",
      },
    },
    include: {
      user: true,
    },
  })

  const formattedTodos = todos.map((todo) => ({
    id: todo.id,
    title: todo.title,
    completed: todo.completed,
    name: todo.user.name,
  }))

  return NextResponse.json(formattedTodos)
}

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json()
  if (!data || !data.title) {
    //console.log(res instanceof NextApiResponse)
    return NextResponse.json({
      title: "Title is required",
      tom: data,
      test: Object.getOwnPropertyNames(Object.getPrototypeOf(NextResponse)),
    })
  }
  function formatCurrentDate() {
    const now = new Date()

    const year = now.getFullYear()
    const month = (now.getMonth() + 1).toString().padStart(2, "0")
    const day = now.getDate().toString().padStart(2, "0")

    const hours = now.getHours().toString().padStart(2, "0")
    const minutes = now.getMinutes().toString().padStart(2, "0")
    const seconds = now.getSeconds().toString().padStart(2, "0")
    const milliseconds = now.getMilliseconds().toString().padStart(3, "0")

    return new Date(
      `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`,
    )
  }
  const currentData = formatCurrentDate()

  const todo = await prisma.todo.create({
    data: {
      title: data.title,
      updatedAt: currentData,
      userId: "default_user",
    },
  })
  console.log(req.body)

  return NextResponse.json(todo)
}
