import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const NotFoundPage = () => {
    return (
        <Layout>
            <Head title="404" />
            <h1>お探しのページが見つかりませんでした。</h1>
            <p><Link to="/">Homeへ</Link></p>
        </Layout>
    )
}

export default NotFoundPage