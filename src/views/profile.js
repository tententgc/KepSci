import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderFull from '../components/header-full'
import OutlineBlueButton from '../components/outline-blue-button'
import NextButton from '../components/next-button'
import BlogCard from '../components/blog-card'
import PrimaryBlueButton from '../components/primary-blue-button'
import Footer from '../components/footer'
import './profile.css'

const Profile = (props) => {
  return (
    <div className="profile-container">
      <Helmet>
        <title>Profile - Soft UI Pro</title>
        <meta property="og:title" content="Profile - Soft UI Pro" />
      </Helmet>
      <HeaderFull></HeaderFull>
      
    </div>
  )
}

export default Profile
