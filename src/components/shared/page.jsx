import React from 'react'
import { Link } from 'gatsby';
import styles from './page.module.css'

export default (pageComponent) => (
  <div>
    {pageComponent()}
    <div className={styles.footer} style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <Link to='/'>Tutorial Home</Link>
    </div>
  </div>
)