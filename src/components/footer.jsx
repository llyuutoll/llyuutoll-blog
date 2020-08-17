import React from 'react'
import { Link } from 'gatsby'
import footerStyles from './footer.module.scss'
import profileImg from '../assets/mag-min.png'

const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
            <div className={footerStyles.container}>
                <div className={footerStyles.contents}>
                    <div className={footerStyles.profile}>
                        <img src={profileImg} alt="プロファイル画像" />
                        <a href="https://twitter.com/FunChannel2000">@FunChannel2000</a>
                    </div>
                    <div className={footerStyles.footerList}>
                        <Link className={footerStyles.footerItem} to="/terms">利用規約</Link>
                        <Link className={footerStyles.footerItem} to="/contact">お問い合わせ</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer