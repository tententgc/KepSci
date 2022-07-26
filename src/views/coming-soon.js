import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import SecondaryButton from '../components/secondary-button'
import FooterGray from '../components/footer-gray'
import './coming-soon.css'

const ComingSoon = (props) => {
  return (
    <div className="coming-soon-container">
      <Helmet>
        <title>Contact - KepSci</title>
        <meta property="og:title" content="ComingSoon - Soft UI Pro" />
      </Helmet>
      <Header></Header>
    </div>
  )
}

export default ComingSoon
