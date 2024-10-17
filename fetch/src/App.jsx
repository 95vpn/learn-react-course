import { useFetch } from './useFetch'
import './App.css'

function App() {
  
  const {data, loading, error, handleCancelRequest} = useFetch("https://jsonplaceholder.typicode.com/users")

  return (
    <>
    <h1>Fetch like a pro</h1>
    <button onClick={handleCancelRequest}>Cancel Request</button>
    <ul>
      {error && <li>Error: {error}</li>}
      {loading && <li>Loading...</li>}
      {data?.map((user) => (<li key={user.id}>{user.name}</li>))}
    </ul>
    </>
  )
}

export default App
