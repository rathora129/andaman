import React from 'react'
import Login from "./Login"
import Profile from "./Profile"
import ContextProvider from './Context/ContextProvider'

const App = () => {

  

  return (
   <ContextProvider>
      <Login/>
      <Profile/>
   </ContextProvider> 
  )
}

export default App  