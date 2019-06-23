import React from 'react'
import { Link } from 'gatsby';
import Container from '../../components/shared/container'

export default () => (
  <Container>
    <h1>Source plugins and rendering queried data</h1>
    <p>I guess we're rendering queried data and stuff.</p>
    <Link to='/source-plugins/my-files'>My files</Link>
  </Container>
)