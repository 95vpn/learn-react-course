import { useState } from 'react'
import { Suspense } from 'react'
import './App.css'
import { fetchData } from './fetchData'

const apiData = fetchData("https://jsonplaceholder.typicode.com/users")
function App() {
  const data = apiData.read();
  return (

    
    <>
      <h1>Fetch like a pro</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ul className='card'>
          {data?.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </Suspense>
    </>
  )
}

export default App
