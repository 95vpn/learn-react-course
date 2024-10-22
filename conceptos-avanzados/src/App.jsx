import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useFetch } from './components/useFetch'

function App() {
  const [count, setCount] = useState(0)

  const { data, loading } = useFetch("https://api.kanye.rest/")

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{loading ? "Loading..." : data.quote}</h1>
    </>
  )
}

export default App
