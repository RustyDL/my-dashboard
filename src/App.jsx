import './App.css'
import Dashboard from './components/PrimaryDashboard'
import TransactionBar from './components/TransactionBar'
import LineData from './components/LineChart'

function App() {



  return (
    <>
    <Dashboard/>
    <br/>
    <br/>
     {/* <Heading/> */}
     <LineData/>
     <br/>
     <br/>
     <TransactionBar/>
    </>
  )
}

export default App