import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const PATCH = async (
  req: NextRequest,
  { params }: { params: { id: string } },
) => {
  const id = params.id
  const currentTodo = await prisma.todo.findUnique({
    where: { id },
  })
  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: { completed: !currentTodo?.completed },
  })
  return NextResponse.json(updatedTodo)
}

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string } },
) => {
  const id = params.id
  const res = await prisma.todo.delete({
    where: {
      id,
    },
  })
  return NextResponse.json(res)
}
