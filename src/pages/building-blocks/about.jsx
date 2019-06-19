import React from 'react'
import { Link } from 'gatsby'
import Header from '../../components/building-blocks/header'
import Container from '../../components/shared/container'

export default () => (
  <Container>
    <Link to='/building-blocks'>Home</Link>
    <Header headerText='About Gatsby'/>
    <Header headerText="It's pretty cool" />
    <p>Such wow. Very React.</p>
  </Container>
)
