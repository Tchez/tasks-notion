import { useState } from "react";

export function TodoItem({ todo }) {
    const { id, properties, url, icon } = todo

    const [isCompleted, setIsCompleted] = useState(todo.properties.Completed.checkbox);


    const handleCompletedChange = (e) => {
        setIsCompleted(e.target.checked);
    };


    return (
        <div className="flex mb-4 items-center">
            <input
                type="checkbox"
                checked={isCompleted}
                onChange={handleCompletedChange}
                className="mr-2 form-checkbox h-5 w-5 text-gray-600 border-gray-300 rounded"
            />

            <p className="w-full text-grey-darkest">
                {
                    icon && (
                        todo.icon.type === 'emoji' ?
                            <span className="mr-2">{todo.icon.emoji}</span>
                            : ''
                    )
                }
                {
                    properties.Name.title[0] ?
                        properties.Name.title[0].plain_text
                        : 'Untitled'
                }
            </p>
            <button className="flex-no-shrink p-2 ml-2 border-2 rounded hover:text-red-600 hover:border-red-500">Delete</button>
        </div>
    )
}