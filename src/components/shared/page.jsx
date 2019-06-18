import React from 'react'
import { Link } from 'gatsby';
import styles from './page.module.css'

export default (pageComponent) => (
  <div>
    {pageComponent()}
    <div className={styles.footer}>
      <Link to='/'>Tutorial Home</Link>
    </div>
  </div>
)