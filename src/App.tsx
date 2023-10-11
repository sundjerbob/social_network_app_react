import { useState } from 'react'
import './App.css'
import MainPage from './pages/main_page/MainPage';

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="App">
        <MainPage/>
    </div>



  )
}

export default App
