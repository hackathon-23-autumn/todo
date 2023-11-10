import { NextResponse } from "next/server"

export async function PATCH() {
  return NextResponse.json([
    {
      id: 7,
      todo: "todo7",
      completed: false,
    },
    {
      id: 8,
      todo: "todo8",
      completed: true,
    },
    {
      id: 9,
      todo: "todo9",
      completed: true,
    },
  ])
}

export async function DELETE() {
  return NextResponse.json([
    {
      id: 10,
      todo: "todo10",
      completed: true,
    },
    {
      id: 11,
      todo: "todo11",
      completed: true,
    },
    {
      id: 12,
      todo: "todo12",
      completed: true,
    },
  ])
}
