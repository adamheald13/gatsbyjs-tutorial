import React from 'react'
import { Link } from 'gatsby'
import Header from '../../components/building-blocks/header'
import page from '../../components/shared/page'

const contact = () => (
  <div style={{ color: `teal` }}>
    <Link to='/building-blocks'>Home</Link>
    <Header headerText='Contact' />
    <p>Send us a message!</p>
  </div>
)

export default () => page(contact)