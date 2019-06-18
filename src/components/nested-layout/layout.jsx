import React from 'react'
import { Link } from 'gatsby'

const ListLink = ({ children, to }) => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={to}>{children}</Link>
  </li>
)

export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to='/nested-layout' style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>MySweetSite</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to='/nested-layout'>Home</ListLink>
        <ListLink to='/nested-layout/about'>About</ListLink>
        <ListLink to='/nested-layout/contact'>Contact</ListLink>
      </ul>
    </header>
    {children}
  </div>
)