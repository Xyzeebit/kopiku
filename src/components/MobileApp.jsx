import { useState, useContext } from 'react';
import { StoreContext } from './ContextComponents';
import {IconButton} from './IconButton';

import icon_add from '../images/icon-add.svg';
import icon_search from '../images/icon-search.svg';
import icon_fire from '../images/icon-fire.svg';
import icon_love from '../images/icon-love.svg';
import icon_favorite from '../images/icon-favorite.svg';
import bags from '../images/multi-bag-alt.jpg';

import icon_home from '../images/icon-home-alt.svg';
// import icon_wallet from '../images/icon-wallet.svg';
import icon_cart from '../images/icon-shopping-cart.svg';
import icon_user from '../images/icon-user.svg';

export default function MobileApp() {
  const menuIcons = [icon_home, icon_love, icon_cart, icon_user];
  return (
    <div className="mobile-app">
      <AppBanner />
      <SearchBeans />
      <ButtonList />
      <BeansItemList />
      <Promotion />
      <MenuBar icons={menuIcons} />
    </div>
  );
}

const MenuBar = ({ icons }) => (
  <div className="menu-bar">
    {
      icons.map((icon, i) => (
        <img
          key={`${i}-menu`}
          src={icon}
          alt="menu icon"
          width="12"
          height="12"
          className="menu-icon"
        />
      ))
    }
  </div>
)

const Promotion = () => (
  <div className="promotion">
    <img
      src={bags}
      alt="Latest offer"
      width="50"
      height="50"
    />
    <div className="promotion__container">
        <span>Discount Sales</span>
        <span>Get three coffee beans for the subscribe Kopiku</span>
    </div>
  </div>
)

const BeansItemList = () => {
  const [store] = useContext(StoreContext);
  const { products } = store;
  return (
    <div className="beans__item--list">
      {
        products.beans.map((beans, i) => {
          if(i < 2) {
            return (
              <BeansItem
                key={beans._id + i}
                image={beans.image}
                title={beans.title}
                price={beans.price}
              />
            )
          } else {
            return null;
          }
        })
      }
    </div>
  );
}

const BeansItem = ({ image, title, price }) => (
  <div className="beans__item">
    <img
      src={image}
      alt="Beans"
      width="60"
      height="120"
      className="beans__item--image"
    />
    <div className="beans__item--title">{title}</div>
    <div className="beans__item--sub-title">Coffee Beans</div>
    <div className="beans__item--price-button">
      <span>$ {price}</span>
      <button className="beans__item--add-to-cart">
        <img
          src={icon_add}
          alt="Add to cart"
          width="28"
          height="28"
        />
      </button>
    </div>
  </div>
)

const ButtonList = () => (
  <div className="button__list">
    <IconButton icon={icon_fire} text="Popular" />
    <IconButton icon={icon_favorite} text="Newest" />
    <IconButton icon={icon_love} text="Recommadation" />
  </div>
)

const SearchBeans = () => {
  const [value, setValue] = useState('');
  return (
    <div className="beans__search--group">
      <form onSubmit={ evt => {
        evt.preventDefault();
        setValue('');
      }}>
        <input
          type="text"
          className="beans__search--input"
          value={value}
          onChange={ ({ target }) => setValue(target.value) }
          placeholder="Search..."
          disabled={true}
        />
        <button type="submit" className="submit__beans--search">
          <img
            src={icon_search}
            alt="search beans"
            width="25"
            height="20"
          />
        </button>
      </form>
    </div>
  )
}

const AppBanner = () => (
  <div className="app__banner">
    <div className="app__user">
      <span>Hello Admin</span>
      <span>Find your best beans</span>
    </div>
    <div className="app__user--icon">&clubs;</div>
  </div>
)
