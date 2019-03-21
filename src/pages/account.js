import React from "react"
import { Router } from "@reach/router"
import { login, logout, isAuthenticated, getProfile } from "../utils/auth"
import { Link } from "gatsby"

const Home = () => <p>Home</p>
const Settings = () => <p>Settings</p>
const Billing = () => <p>Billing</p>

const Account = () => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  const user = getProfile()

  return (
    <>
      <nav>
        <Link to="/account/">Home</Link>{" "}
        <Link to="/account/settings/">Settings</Link>{" "}
        <Link to="/account/billing/">Billing</Link>{" "}
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
      <Router>
        <Settings path="/account/settings" />
        <Billing path="/account/billing" />
        <Home path="/account/" />
      </Router>
    </>
  )
}

export default Account
