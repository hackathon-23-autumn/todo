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

export async function POST() {
  return NextResponse.json([
    {
      id: 4,
      todo: "todo4",
      completed: false,
    },
    {
      id: 5,
      todo: "todo5",
      completed: false,
    },
    {
      id: 6,
      todo: "todo6",
      completed: true,
    },
  ])
}
