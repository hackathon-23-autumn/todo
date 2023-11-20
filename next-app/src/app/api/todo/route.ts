import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const GET = async () => {
  const todos = await prisma.todo.findMany({
    where: {
      userId: "clp2o5pnx00004tkeaxbs54lv",
    },
    select: {
      id: true,
      title: true,
      completed: true,
    },
  })
  return NextResponse.json(todos)
}

export const POST = async (req: NextRequest, res: NextResponse) => {
  const data = await req.json()

  const todo = await prisma.todo.create({
    data: {
      title: data.title,
      userId: "clp2o5pnx00004tkeaxbs54lv",
    },
  })

  return NextResponse.json(todo)
}
