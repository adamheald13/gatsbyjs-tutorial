import React from 'react'
import Layout from '../../components/nested-layout/layout'
import page from '../../components/shared/page'

const nestedAbout = () => (
  <Layout>
    <h1>About me</h1>
    <p>I'm good enough, I'm smart enough, and gosh darn it, people like me!</p>
  </Layout>
)

export default () => page(nestedAbout)
