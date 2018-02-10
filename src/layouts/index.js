import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="hamburger.cloud"
      meta={[
        { name: 'description', content: 'Hamburger in the Cloud' },
        { name: 'keywords', content: 'hamburger, cloud' },
      ]}
    />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
