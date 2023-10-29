import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json([
    {
      id: 1,
      todo: "todo1",
      completed: false,
    },
    {
      id: 2,
      todo: "todo2",
      completed: false,
    },
    {
      id: 3,
      todo: "todo3",
      completed: false,
    },
  ])
}
