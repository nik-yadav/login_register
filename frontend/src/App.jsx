import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Main from './Components/Main'
import Header from './Components/Header/Header'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'

function App() {

  return (
    <Router>
      <Header />  
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Register/>} />
      </Routes>
    </Router>
  )
}

export default App
