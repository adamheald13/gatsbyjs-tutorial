import React from 'react'
import { Link } from 'gatsby';
import containerStyles from './container.module.css'

export default ({ children }) => (
  <div className={containerStyles.container}>
    {children}
    <div className={containerStyles.footer}>
      <Link to='/'>Tutorial Home</Link>
    </div>
  </div>
)