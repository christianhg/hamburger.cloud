import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import 'modern-normalize'
import 'prismjs/themes/prism.css'
import './index.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="🍔.☁️"
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
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
