import React from 'react'
import Helmet from 'react-helmet'

import 'modern-normalize'
import 'prismjs/themes/prism.css'
import './layout.scss'

const Layout = ({ children }) => (
  <div>
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
    />
    {children}
  </div>
)

export default Layout
