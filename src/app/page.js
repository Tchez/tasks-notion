"use client"

import axios from "axios"
import { useState, useEffect } from "react"
import { TodoList } from "@/components/Todolist"

export default function Home() {
  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    const fetchTodoList = async () => {
      const response = await axios.get("/api/database")
      setTodoList(response.data)
    }

    fetchTodoList()
  }, [])

  return (
    <div className="h-max mt-20">
      <h1 className="text-4xl font-bold text-center mb-5">Tasks App</h1>

      {!todoList.length && (
        <p className="text-center text-xl mt-5">Loading...</p>
      )}

      <TodoList todoList={todoList} />
    </div>
  )
}
