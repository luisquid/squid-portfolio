import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/layout"
import Head from '../components/head'

const AboutPage = () =>
{
    return (
        <Layout>
            <Head title= "About"/>
            <h1>Have you met Squid?</h1>
            <p>He is a game developer who wants to change the world through videogames. :D</p>
            <p>Want to <Link to ="../contact">Contact Me?</Link></p>
        </Layout>
    )
}

export default AboutPage