import React from 'react'
import { Link } from 'gatsby'
import page from '../../components/page'

const stylingHome = () => (
  <div>
    <h1>Styling</h1>
    <Link to='/styling/about-css-modules'>About CSS Modules</Link>
    <br/>
  </div>
)

export default () => page(stylingHome)