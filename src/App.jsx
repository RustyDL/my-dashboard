import { useState } from 'react'
import './App.css'
import './components/mockData'
import Dashboard from './components/PrimaryDashboard'
import Orders from './components/TransactionBar'
import { mockTransactions } from './components/mockData'

// import { mainListItems } from './components/ListItems'
// import Title from './components/Title'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Dashboard />
    {/* <Transaction /> */}
    <Title />
    {/* { mainListItems } */}
    <button onClick={() => alert("Hello!")}>Click Me</button>
    </>
  )
}

export default App