import React from 'react'
import { Link } from 'gatsby'
import Header from '../../components/building-blocks/header'
import Container from '../../components/styling/container'

export default () => (
  <Container>
    <Link to='/building-blocks'>Home</Link>
    <Header headerText='Contact' />
    <p>Send us a message!</p>
  </Container>
)
