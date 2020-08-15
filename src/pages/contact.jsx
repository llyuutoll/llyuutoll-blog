import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <h1>お問い合わせ</h1>
            <p>Twitterアカウント<a href="https://twitter.com/FunChannel2000" target="_blank" rel="noreferrer">@FunChannel2000</a> にご連絡ください。</p>
        </Layout>
    )
}

export default ContactPage