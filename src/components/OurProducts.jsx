//import Link from './Link';
import { useContext, useState } from 'react';
import { StoreContext } from './ContextComponents';
import { IconButton } from './IconButton';

import icon_search from '../images/icon-search.svg';
import icon_coffee from '../images/icon-coffee.svg';
import icon_tea from '../images/icon-tea.svg';
import icon_beans from '../images/icon-beans.svg';
import icon_bundles from '../images/icon-bundle.svg';
import icon_snack from '../images/icon-snack.svg';

export default function OurProducts() {
    const [productSearchValue, setProductSearchValue] = useState('');
    const [store] = useContext(StoreContext);
    const { products } = store;
    return (
      <div id="our-products" className="our-products">
      <div className="our-products__navigations--container">
        <a href="#our-products" className="our-products__navigations--main-button">
          OUR PRODUCT
        </a>
          <div className="our-products__navigations--header">
            The Best Product by Kopiku
          </div>
          <div className="our-products__navigations--bar">
            {/*<div className="our-products__navigation--buttons">
              <a href="/coffee">Coffee</a>
              <a href="/tea">Tea</a>
              <a href="/beans" className="selected">Beans</a>
              <a href="/bundles">Bundles</a>
              <a href="/snacks">Snacks</a>
            </div>*/}
            <ProductsMenu />
            <form
              className="our-products__search--form"
              onSubmit={(evt) => {
                evt.preventDefault();
                setProductSearchValue("");
              }}
            >
              <div className="our-products__input-group">
                <input
                  type="text"
                  value={productSearchValue}
                  className="our-products__search--input"
                  placeholder="Search products..."
                  onChange={({ target }) => setProductSearchValue(target.value)}
                />
                <button className="our-products__submit--search" type="submit">
                  <img src={icon_search} alt="search products" />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="products__list">
          {products.beans.map((item) => (
            <a key={item._id} href={`/beans/${item._id}`}>
              <ProductItem {...item} />
            </a>
          ))}
        </div>
    </div>
  );
}

const ProductItem = ({ image, title, description, price }) => {
  return (
      <div className="product__item">
          <img
              src={image} alt={title}
              className="product__image"
          />
          <div className="product__title">{title}</div>
            <div className="product__desc">
                {description}
            </div>
          <div className="product__price">$ {price}</div>
        </div>
    );
}

const ProductsMenu = () => (
  <div className="our-products__navigation--buttons">
    <IconButton icon={icon_coffee} text="Coffee" />
    <IconButton icon={icon_tea} text="Tea" />
    <IconButton icon={icon_beans} text="Beans" active="icon__selected" />
    <IconButton icon={icon_bundles} text="Bundles" />
    <IconButton icon={icon_snack} text="Snacks" />
  </div>
)
