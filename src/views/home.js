import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import PrimaryPinkButton from '../components/primary-pink-button'
import OutlineGrayButton from '../components/outline-gray-button'
import FeatureCard from '../components/feature-card'
import OutlineBlackButton from '../components/outline-black-button'
import ListItem from '../components/list-item'
import Footer from '../components/footer'
import './home.css'
import HeaderFull from '../components/header-full' 

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>KepSci</title>
        <meta property="og:title" content="Soft UI Pro" />
      </Helmet>
      <HeaderFull></HeaderFull>

    </div>
  )
}

export default Home
