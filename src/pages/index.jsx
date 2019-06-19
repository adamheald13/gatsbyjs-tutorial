import React from 'react'
import { Link } from 'gatsby'
import Container from '../components/shared/container'

export default () => (
  <Container>
    <h1>Gatsby Tutorial</h1>

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
  </Container>
)
