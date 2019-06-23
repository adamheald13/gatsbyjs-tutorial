import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Container from '../shared/container'
import { css } from '@emotion/core'

import { rhythm } from '../../utils/typography'

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <Container>
      <div
        css={css`
          margin: 0 auto;
          padding ${rhythm(2)};
          padding-top: ${rhythm(1.5)};
        `}
      >
        <Link to ={'/data'}>
          <h3
            css={css`
              margin-bottom: ${rhythm(2)};
              display: inline-block;
              font-style: normal;
            `}
          >
            {data.site.siteMetadata.title}
          </h3>
        </Link>
        <Link
          to={'/data/about'}
          css={css`
            float: right;
          `}
        >
          About
        </Link>
        {children}
      </div>
    </Container>
  )
} 
