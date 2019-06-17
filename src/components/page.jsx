import React from 'react'
import { Link } from 'gatsby';

export default (pageComponent) => (
  <div>
    {pageComponent()}
    <Link to='/'>Tutorial Home</Link>
  </div>
)