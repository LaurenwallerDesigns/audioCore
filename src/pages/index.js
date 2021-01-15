import React from "react"
import { Link } from 'gatsby'

export default () => {
  return (
    <>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/location">Locations</Link>
      </li>
    </ul>
    <h2>AudioCOre</h2>
    <p>This is the AudioCOre homepage.</p>
    </>
  )
}