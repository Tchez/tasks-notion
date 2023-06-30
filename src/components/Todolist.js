import { TodoItem } from '@/components/TodoItem'

export function TodoList({ todoList }) {
    return (
        <>
            <div class="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
                <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                    <div class="mb-4">
                        <h1 class="text-gray-600">Todo List</h1>
                        <div class="flex mt-4">
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo" />
                            <button class="flex-no-shrink p-2 border-2 rounded hover:text-teal-400 hover:border-teal-200">Add</button>
                        </div>
                    </div>
                    <div>
                        {todoList.map((todo) => (
                            <TodoItem key={todo.id} todo={todo} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}