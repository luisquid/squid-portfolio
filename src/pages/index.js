import React from "react"
import {Link} from 'gatsby'

import Layout from "../components/layout"
import '../styles/index.scss'
import Head from '../components/head'

const IndexPage = () =>{
  return(
    <Layout>
      <Head title ="Home"/>
      <h1>Welcome to Squid's Portfolio!</h1>
      <h2>:D</h2>
      <p>Need a developer? <Link to = "../contact">Contact me!</Link></p>
    </Layout>
  )
}

export default IndexPage
