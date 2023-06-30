'use client'
import { TodoList } from "@/components/TodoList"
import { useTodoList } from "@/hooks/useTodoList"

export default function Home() {
  const { todoList, isLoading, isError } = useTodoList()

  if (isError) {
    return <div className="text-center  mt-28">
      <p className="text-red-600 mb-6 font-bold text-[2rem]">Failed to load tasks!</p>
      <p className="text-gray-600 text-[1.7rem]">Please, check your network and database connection.</p>
    </div >
  }

  return (
    <div className="h-max mt-20">
      <h1 className="text-4xl font-bold text-center mb-5">Tasks App</h1>
      {<TodoList todoList={todoList} />}
    </div>
  )
}
