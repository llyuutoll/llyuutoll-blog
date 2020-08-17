import React from 'react'
import { Link } from 'gatsby'

import logoImg from '../assets/logo.svg'

import headerStyles from './header.module.scss'

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.brand}>
                <Link to="/">
                    <img src={logoImg} alt="ロゴ画像"/>
                </Link>
            </div>
        </header>
    )
}

export default Header