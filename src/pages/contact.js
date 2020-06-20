import React from 'react'
import Layout from "../components/layout"
import Head from '../components/head'

const ContactPage = () =>{
    return(
        <Layout>
            <Head title = "Contact"/>
            <h1>You can find me on twitter as: </h1>
            <p>
                <a href = "https://twitter.com/luisquid" target = "_blank">@luisquid</a>
            </p>
        </Layout>
    )
}

export default ContactPage