import React from 'react'

import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import LayoutStyles from './layout.module.scss'

const Layout = (props) => {
    return (
        <>
            <Header />
            <div className={LayoutStyles.container}>
                <div className={LayoutStyles.content}>                
                    {props.children}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Layout