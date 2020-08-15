import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <h1>私について</h1>
            <p>私は今、React, Redux, Firebaseを独学で習得しています。</p>
            <p>私に連絡を取りたい方。<Link to="/contact">お問い合わせはこちら</Link></p>
        </Layout>
    )
}

export default AboutPage