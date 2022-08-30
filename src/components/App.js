import './App.css'
import Header from './Header.js'
import SignIn from './SignIn.js'
import SignUp from './SignUp.js'
import Main from './Main.js'
import AddNew from './AddNew'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
function App() {
  {
    /*
 const [users, setUsers] = useState([])

 
    
*/
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/' element={<SignIn />} />
          {/* <Route path='/' element={<SignIn adduser={setUsers} />} /> */}
          <Route path='/Main' element={<Main />} />
          <Route path='/Main/AddNew' element={<AddNew />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
