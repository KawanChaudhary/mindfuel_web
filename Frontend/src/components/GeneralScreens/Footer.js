import React from 'react';
import '../../Css/Footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div>
            <div className="footer">
            </div>
            <div className="copyright">
                <p className="copyright-blog">© {currentYear} MIND FUEL🔥. All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer;
