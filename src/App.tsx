import { useState } from 'react'
import './components/main_page/MainPage'
import './App.css'
import MainPage from './components/main_page/MainPage';
import pederskoSrce from './assets/pride_heart.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

     <header>
         <img id="pederskoSrce" src={pederskoSrce}   alt=''/>
         <h1>Pronadji si Lezbu</h1>
     </header>

     <main>
        <MainPage/>
     </main>

     <footer>
       <p>&copy; 2023 Kurve Exsoticne Corporation</p>
       <p>Contact us: <a href="mailto:contact@example.com">contact@example.com</a></p>
     </footer>



    </div>
  )
}

export default App
