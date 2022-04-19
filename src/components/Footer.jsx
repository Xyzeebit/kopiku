import { useContext, useRef, useEffect } from 'react';
import { ThemeContext } from './ContextComponents';
//import Image from 'next/image';
//import Link from './Link';
import { isInViewport, screenScroll } from './in-viewport';

import instagram from '../images/instagram-round-line.svg';
import twitter from '../images/twitter-round-line.svg';
import facebook from '../images/facebook-round-line.svg';
import logo from '../images/logo.png';

export default function Footer() {
    const [theme] = useContext(ThemeContext);
    const linksRef = useRef();


    const style = {
        backgroundColor: theme.background
    }

    useEffect(() => {
        screenScroll(() => {
            if (isInViewport(linksRef.current)) {
                linksRef.current.style.opacity = 1;
                window.removeEventListener('scroll', screenScroll);
            }
        })
        return () => window.removeEventListener('scroll', screenScroll);
    }, []);

    return (
        <div style={style} className="footer">
            <div className="footer--content">
                <div className="footer--brand">
                    <img
                        src={logo}
                        className="footer--brand-image"
                        width={"80"}
                        height={"50"}
                        alt="Kopiku Logo"
                    />

                    <div className="footer--brand-header">
                        A new normal to cafes.<br />
                        Seamless, Simple, Better
                    </div>

                    <div className="footer--brand-socials">
                        <a href="/">
                            <img
                                src={facebook}
                                alt="Follow us on Facebook"
                                className="social-media-button"
                             />
                        </a>

                        <a href="/">
                            <img
                                src={twitter}
                                alt="Follow us on Twitter"
                                className="social-media-button"
                            />
                        </a>

                        <a href="/">
                            <img
                                src={instagram}
                                alt="Follow us on Instagram"
                                className="social-media-button"
                            />
                        </a>
                    </div>
                </div>


                <div className="footer--links" ref={linksRef}>
                    <ul>
                        <li className="footer--links-header">How it works</li>
                        <li>
                            <a href="/">Select Product</a>
                        </li>
                        <li>
                            <a href="/">Make Payment</a>
                        </li>
                        <li>
                            <a href="/">Receive Product</a>
                        </li>

                    </ul>

                    <ul>
                        <li className="footer--links-header">Product</li>
                        <li>
                            <a href="/">Coffee</a>
                        </li>
                        <li>
                            <a href="/">Tea</a>
                        </li>
                        <li>
                            <a href="/">Beans</a>
                        </li>
                        <li>
                            <a href="/">Bundle</a>
                        </li>
                        <li>
                            <a href="/">Snack</a>
                        </li>
                    </ul>

                    <ul>
                        <li className="footer--links-header">Help</li>
                        <li>
                            <a href="/">About</a>
                        </li>
                        <li>
                            <a href="/">Contact Us</a>
                        </li>
                        <li>
                            <a href="/">Download App</a>
                        </li>
                        <li>
                            <a href="/">FAQs</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer--policy">
                <a href="/">Security</a>|
                <a href="/">Privacy</a>|
                <a href="/">Terms</a>|
                <a href="/">&copy; 2022 Kopiku</a>
            </div>


        </div>
    );
}
