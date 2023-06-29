export default function Home() {
  return (
    <div className="w-full flex items-center justify-center mt-20">
      <div className="flex items-center justify-center">
        <div className="bg-slate-50 rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <h1 className="text-grey-darkest">Todo List - Hello world</h1>
            <div className="flex mt-4">
              <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo" />
              <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal">Add</button>
            </div>
          </div>
          <div>
            <div className="flex mb-4">
              <p className="w-full text-grey-darkest">Task example</p>
              <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">Done</button>
              <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
