import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home" />
            <h1>こんにちわ！</h1>
            <h2>私は、北海道函館市に住むシステム情報科学を専攻している大学生です。</h2>
            <p>私に連絡を取りたい方。<Link to="/contact">お問い合わせはこちら</Link></p>
        </Layout>
    )
}

export default IndexPage