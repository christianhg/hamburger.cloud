import React from 'react'
import Helmet from 'react-helmet'

import 'modern-normalize'
import 'prismjs/themes/prism.css'
import './layout.css'

const Layout = ({ children }) => (
  <>
    <Helmet
      title="Personal website of Christian Hamburger Grøngaard"
      meta={[
        {
          name: 'description',
          content: 'Personal website of Christian Hamburger Grøngaard',
        },
        {
          name: 'keywords',
          content: 'hamburger, cloud, christian, grøngaard',
        },
      ]}
    >
      <html lang="en" />
    </Helmet>
    {children}
  </>
)

export default Layout
