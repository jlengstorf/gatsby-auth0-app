import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import {
  logout,
  handleAuthentication,
  isAuthenticated,
  getProfile,
} from "../utils/auth"

const Callback = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState({})
  useEffect(() => {
    if (isAuthenticated()) {
      // this is for page reload
      setUser(getProfile())
      setIsLoading(false)
    } else {
      // normal callback
      handleAuthentication(() => setIsLoading(false))
    }
  })
  if (isLoading) {
    return <p>Loading Profile</p>
  }
  return (
    <>
      <p>Callback</p>
      <nav>
        <Link to="/">Home</Link> <Link to="/account/">My Account</Link>{" "}
        <a
          href="#logout"
          onClick={e => {
            logout()
            e.preventDefault()
          }}
        >
          Log Out
        </a>
      </nav>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  )
}

export default Callback
