import './App.css'
import { Fragment, useEffect, useRef, useState } from 'react'
import Todo from './components/Todo'
import AddModal from './components/AddModal'
import { HttpRequest } from './hooks/http.request'

function App() {
  let ref = useRef(null)

  const [todos, setTodos] = useState([])
  const { loading, error, request } = HttpRequest()

  useEffect(() => {
    request('/todos')
      .then(res => {
        console.log(res);
        setTodos(res)
      })
  }, [])

  return (
    <>
      <main className='max-w-[1240px] w-[95%] my-0 mx-auto'>
        <header className='mt-10 flex gap-3 items-center'>
          <h1 className='text-5xl font-bold'>Dashboard</h1>
          <button
            onClick={() => ref.current.showModal()}
            className='py-3 px-8 bg-[#007FFF] text-white text-base rounded-xl transition ease-in-out duration-300 hover:scale-105 hover:bg-[#0048ff]'>Добавить задачу
          </button>
        </header>

        <section className='mt-10 grid grid-cols-3 gap-5'>
          {
            todos.map((item, idx) => (
              <Todo
                name={item.title}
                desc={item.description}
                date={item.date}
                time={item.time}
                status={item.status}
                id={item.id}
                key={idx}
              />
            ))
          }
        </section>
      </main>

      <AddModal
        ref={ref}
      />
    </>
  )
}

export default App
