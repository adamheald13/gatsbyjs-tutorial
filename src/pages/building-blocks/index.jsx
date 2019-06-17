import React from "react"
import { Link } from 'gatsby'
import page from '../../components/page'

const buildingBlocksHome = () => (
  <div style={{ color: `purple` }}>
    <Link to='/building-blocks/contact'>Contact</Link>
    <br/>
    <Link to='/building-blocks/about'>About</Link>
    <h1>Hello Gatsby!</h1>
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="random"/>
  </div>
)

export default () => page(buildingBlocksHome)