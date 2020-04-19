import React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1 className="blog-title">
        <Link to={`/`}>
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <p class="h4 heavy">
        <Link to={`/`}>
          {title}
        </Link>
      </p>
    )
  }
  return (
    <div className="container">
      <header>{header}</header>
      <main>{children}</main>
      <footer>
    © Elizabeth Overton {new Date().getFullYear()}.<br /><small>I built this with
        {` `}
        <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby</a> and host it on <a href="https://netlify.com" target="_blank" rel="noopener noreferrer">Netlify</a>. You can check out the <a href="https://github.com/lizmology/startingisbest.com" target="_blank" rel="noopener noreferrer">source</a> on Github.</small>
      </footer>
    </div>
  )
}

export default Layout
