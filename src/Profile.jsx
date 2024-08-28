import React, { useContext } from 'react'
import userContext from './Context/CreateContext'

const Profile = () => {

  const { user } = useContext(userContext)


  {
    if (!user) return <p>please login</p>
    return <p>welcome {user.email}</p>
  }
}

export default Profile