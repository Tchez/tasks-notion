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
                className="mr-2 form-checkbox h-5 w-5 text-gray-600"
            />


            <p class="w-full text-grey-darkest">
                {icon && (
                    todo.icon.type === 'emoji' ?
                        <span className="mr-2">{todo.icon.emoji}</span>
                        : '')}
                {properties.Name.title[0].plain_text}
            </p>
            <button class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">Done</button>
            <button class="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove</button>
        </div>
    )
}

{/*
<div class="flex mb-4 items-center">
    
</div> */}


            // <li key={id}>
            //
            //     {url}
            // </li>