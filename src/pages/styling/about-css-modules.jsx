import React from 'react'

import Container from '../../components/styling/container'
import page from '../../components/page'

const aboutCssModules = () => (
  <Container>
    <h1>About CSS Modules</h1>
    <p>CSS Modules are cool</p>
  </Container>
)

export default () => page(aboutCssModules)