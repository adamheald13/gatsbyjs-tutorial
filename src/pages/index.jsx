import React from 'react'
import { Link } from 'gatsby'

export default () => (
  <div>
    <h1>Gatsby Tutorial Home</h1>
    <h2>By Adam Heald</h2>
    <p>
      <a href="adamheald.com">adamheald.com</a>
      <br/>
      <a href="mailto:adamheald13@gmail.com">adamheald13@gmail.com</a>
    </p>

    <h2>
      <span>1) </span>
      <Link to='/building-blocks'>Building Blocks</Link>
    </h2>

    <h2>
      <span>2) </span>
      <Link to='/styling'>Styling</Link>
    </h2>

    <h2>
      <span>3) </span>
      <Link to='/nested-layout'>Nested Layout</Link>
    </h2>
  </div>
)
