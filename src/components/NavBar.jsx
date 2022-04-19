import { useState } from 'react';
import Link from './Link';
import logo from '../images/logo.png';

const NavBar = () => {
  const [active, setActive] = useState(0);

    return (
        <div className="navbar">
          <a href="/">
            <img
              src={logo}
              alt="Logo"
              width="60"
              height="50"
              className="navbar__logo"
            />
          </a>
          <div className="navbar__menu">
            <div className="navbar__menu--item">
              <Link
                href="/"
                label="Home"
                isActive={active === 0}
                className={`${active === 0 ? 'selected' : ''}`}
                onClick={evt => {
                  evt.preventDefault();
                  setActive(0);
                }}
              />

              <Link
                href="#how-it-works"
                label="How it works"
                isActive={active === 1}
                className={`${active === 1 ? 'selected' : ''}`}
                onClick={evt => {
                  setActive(1);
                }}
              />

              <Link
                href="#our-products"
                label="Products"
                isActive={active === 2}
                className={`${active === 2 ? 'selected' : ''}`}
                onClick={evt => {
                  setActive(2);
                }}
              />

              <Link
                href="/"
                label="Help"
                isActive={active === 3}
                className={`${active === 3 ? 'selected' : ''}`}
                onClick={evt => {
                  evt.preventDefault();
                  setActive(3);
                }}
              />

            </div>
          </div>
        </div>
    );
}

export default NavBar;
