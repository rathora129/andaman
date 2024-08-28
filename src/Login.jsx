import React, { useContext, useState } from 'react'
import userContext from './Context/CreateContext'

const Login = () => {

  const { setUser } = useContext(userContext)
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")


  const saveData = (e) => {
    e.preventDefault()
    setUser({ pass, email })    
  }

  return (
    <>
    <div className='text-center'>
      <input type="text" onChange={(e) => setEmail(e.target.value)} />
      <input type="text" onChange={(e) => setPass(e.target.value)} />
      <button onClick={saveData}>login</button>
    </div>
    </>
  )
}

export default Login