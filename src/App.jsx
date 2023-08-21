import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'
import Header from './Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<Header Name={"News Api"}/>
<Card/>


</>
  )
}

export default App
