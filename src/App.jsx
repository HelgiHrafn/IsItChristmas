import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { isSameDay } from 'date-fns'

const today = new Date()
const christmas = new Date(today.getFullYear(), 11, 24) // 11 = December

const isChristmas = isSameDay(today, christmas) || isSameDay(today, new Date(today.getFullYear(), 11, 25))

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>{isChristmas ? "Yes, it is Christmas!" : "No, it is not Christmas."}</h1>
    </div>
  )
}

export default App
