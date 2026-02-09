import { useState, useEffect } from 'react'
import { TodoProvider } from './Context'
import './App.css'

function App() {
  const [todo, setTodo] = useState([])

  const addTodo = (todo) => {
    setTodo((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodo((prev) => {
      prev.map((prev) => { (prev.id === id ? todo : prev) })
    })
  }

  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((todo) => { todo.id !== id }))
  }

  const toggleComplete = (id) => {
    setTodo((prev) =>
      prev.map((todo) => { todo.id === id ? { ...todo, completed: !todo.completed } : todo })
    )

    useEffect(() => {
      const todos = JSON.parse(localStorage.getItem("todo"))

      if (todos  && todos.length > 0) {
        setTodo(todos)
      }
    }, [])

    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todo))
    }, [todo])

    return (

      <TodoProvider value={{ todo, addTodo, updateTodo, deleteTodo, toggleComplete }}>
        <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">
              Manage your Todos
            </h1>
            <div className="mb-4"></div>
            <div className="flex flex-wrap gap-y-3"></div>
          </div>
        </div>
      </TodoProvider>

    )
  }
}

export default App;
