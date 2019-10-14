import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// custom components

import Header from "components/Header/Header"

const defaultLayout = ({ children }) => (
  <>
    <Header siteTitle="Test site" />
    <div
      style={{
        margin: `60px`,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
      }}
    >
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  </>
)

defaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default defaultLayout
