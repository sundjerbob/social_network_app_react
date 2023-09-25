import { useState } from 'react'
import './components/main_page/MainPage'
import './App.css'
import MainPage from "./components/main_page/MainPage";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

     <header>
        <h2>Glupi Cacajlo</h2>
     </header>

     <main>
        <MainPage/>
     </main>

     <footer>
       <p>&copy; 2023 My Social/Business Network</p>
       <p>Contact us: <a href="mailto:contact@example.com">contact@example.com</a></p>
     </footer>



    </div>
  )
}

export default App
