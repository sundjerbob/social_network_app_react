import { useState } from 'react'
import './components/main_page/MainPage'
import './App.css'
import MainPage from './components/main_page/MainPage';

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="App">
        <MainPage/>
    </div>



  )
}

export default App
