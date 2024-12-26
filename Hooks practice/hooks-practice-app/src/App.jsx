import { useState, createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildComponent from './ChildComponent';
export const AppContext = createContext()

function App() {
  const [color, setColor] = useState("blue")



  return (
    <AppContext.Provider value={color}>
      <ChildComponent />
    </AppContext.Provider>
  )
}

export default App
