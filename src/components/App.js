import './App.css'

import Header from './Header.js'
import SignIn from './SignIn.js'
import SignUp from './SignUp.js'
import Main from './Main.js'
import AddNew from './AddNew'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import MyContext from './UserContext'
function App() {
  const [user, setUser] = useState({})

  const addUserhandle = (user) => {
    setUser(user)
    console.log(user)
  }

  return (
    <div>
      <MyContext.Provider value={{ user }}>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path='/SignUp' element={<SignUp />} />
            <Route path='/' element={<SignIn adduser={addUserhandle} />} />
            {/* <Route path='/' element={<SignIn adduser={setUsers} />} /> */}
            <Route path='/Main' element={<Main />} />
            <Route path='/Main/AddNew' element={<AddNew />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  )
}

export default App
