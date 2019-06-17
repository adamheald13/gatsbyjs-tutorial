import React from 'react'
import { Link } from 'gatsby'
import Header from '../../components/building-blocks/header'
import page from '../../components/page'

const about = () => (
  <div style={{ color: `teal`}}>
    <Link to='/building-blocks'>Home</Link>
    <Header headerText='About Gatsby'/>
    <Header headerText="It's pretty cool" />
    <p>Such wow. Very React.</p>
  </div>
)

export default () => page(about);