import { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { StoreContext } from '../components/ContextComponents';

import logo from '../images/logo.png';
import plus from '../images/icon-add-outline.svg';
import minus from '../images/icon-minus-outline.svg';
import cart from '../images/icon-cart.svg';
import fav_outline from '../images/icon-favorite-outline.svg';
import fav_fill from '../images/icon-favorite-fill.svg';
import star from '../images/icon-star.svg';
import arrow from '../images/right-arrow.svg';


export default function Details() {
    const params = useParams();
    const [store, setStore] = useContext(StoreContext);
    const [item, setItem] = useState({});
    const [appCart, setCart] = useState([]);
  
    const addToCart = (c) => {
      setStore({ ...store, cart: [...appCart, c] });
    }

    useEffect(() => {
        const product = store.products.beans.find( i => i._id === params.id);
        if(product) {
            setItem(product);
        }
    }, [params.id, store.products]);
  
    useEffect(() => {
      if (store.cart) {
        setCart(store.cart);
      }
    }, [store.cart]);

    return (
      <div className="shop">
        <Header cartItems={appCart.length} id={params.id} />
        <div className="content">
          <Product item={item} addToCart={addToCart} />
          <BeansList beans={store.products.beans} />
          <Cart items={appCart} />
        </div>
      </div>
    );
}

const Header = ({ cartItems, id }) => {
    return (
        <header>
            <div className="nav-brand">
                <Link to="/">
                    <img
                        src={logo}
                        alt="Details page kopiku logo"
                        width="80"
                        height="80"
                    />
                </Link>
                <div>
                    <p>Welcome to Kopiku shop</p>
                    <h4>Choose your beans</h4>
                </div>
        </div>
        <CartButton items={cartItems} id={id} />
        </header>
    );
}

const Product = ({ item, addToCart }) => {
    const [selected, setSelected] = useState(1);
    const [fav, setFav] = useState(false);
    const [price, setPrice] = useState(0);
    const [price750, setPrice750] = useState(0);
    const [price500, setPrice500] = useState(0);
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        if (quantity < 1001) {
          const $price = item.price * (quantity + 1);
          const $price500 = (item.price * 2) * (quantity + 1);
          const $price750 = (item.price * 2.5) * (quantity + 1)
          setQuantity(quantity + 1);
          setPrice(parseFloat($price).toFixed(2));
          setPrice500(parseFloat($price500).toFixed(2));
          setPrice750(parseFloat($price750).toFixed(2));
        }
    }
    const decrement = () => {
        if (quantity > 0) {
          const $price = price - item.price;
          const $price500 = price500 - (item.price * 2);
          const $price750 = price750 - (item.price * 2.5);
          setQuantity(quantity - 1);
          setPrice(parseFloat($price).toFixed(2));
          setPrice500(parseFloat($price500).toFixed(2));
          setPrice750(parseFloat($price750).toFixed(2));
        }
    }
    
    const handlePack = n => {
      if (n === 2) {
        setPrice500(price * 2 * quantity);
      } else if(n === 3) {
        setPrice750(price * 2.5 * quantity);
      }
      setSelected(n);
  }

  const handleAddToCart = () => {
    const cart = {};
    if (selected === 1) {
      cart.weight = 250;
      cart.price = price;
    } else if (selected === 2) {
      cart.weight = 500;
      cart.price = price500;
    } else {
      cart.weight = 750;
      cart.price = price750;
    }
    cart.quantity = quantity;
    cart.title = item.title;
    cart.image = item.image;
    addToCart(cart);
  }
  
  useEffect(() => {
    if (item.price) {
      setPrice(item.price)
    }
  }, [item.price]);

    return (
      <div className="detail" id="details">
        <div className="detail__bar">
          <Link to="/">
            <img
              src={arrow}
              alt="go back to home page"
              width="25"
              height="25"
            />
          </Link>
          <p>Detail item</p>
          <img
            src={fav ? fav_fill : fav_outline}
            alt="add to favorite"
            width="25"
            height="20"
            onClick={() => setFav(!fav)}
            className={fav ? "fav" : ""}
          />
        </div>
        <div className="image__container">
          <img src={item.image} alt={item.title} width="150" height="100" />
        </div>
        <div className="item__group--title">
          <h3>{item.title}</h3>
          <div className="badge">
            <img src={star} alt="star" width="10" height="10" />
            <span>{item.rating}</span>
          </div>
        </div>
        <p className="sub__title">Coffee Beans</p>
        <p className="pack">Volume Pack</p>
        <div className="pack__group">
          <button
            className={`${selected === 1 ? "selected" : ""}`}
            onClick={() => handlePack(1)}
          >
            250g
          </button>
          <button
            className={`${selected === 2 ? "selected" : ""}`}
            onClick={() => handlePack(2)}
          >
            500g
          </button>
          <button
            className={`${selected === 3 ? "selected" : ""}`}
            onClick={() => handlePack(3)}
          >
            750g
          </button>
        </div>
        <div className="sub__add--group">
          <button className="sub__button" onClick={decrement}>
            <img
              src={minus}
              alt="subtract from quantity"
              width="30"
              height="30"
            />
          </button>
          <p>{quantity}</p>
          <button className="add__button" onClick={increment}>
            <img src={plus} alt="add more to quantity" width="30" height="30" />
          </button>
        </div>
        <div className="add-to__cart--group">
          <div className="price__group">
            <p>Total Price:</p>
            <h5>${price ? (selected === 1 ? price : selected === 2 ? price500 : price750) : item.price}</h5>
          </div>
          <button className="add__to--cart" onClick={handleAddToCart}>
            <img src={cart} alt="add item to cart" width="25" height="25" />
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    );
}

const BeansList = ({ beans }) => {
  return (
    <div className="more__beans">
      {beans.map((bean) => {
        return (
          <div key={bean._id} className="more__beans--item">
            <div className="flex-start">
              <div className="more__bean--img_container">
                <img
                  src={bean.image}
                  alt={bean.title}
                  width={70}
                  height={100}
                />
              </div>
              <div>
                <h4>{bean.title}</h4>
                <p>{bean.description}</p>
                <h5>${bean.price}</h5>
              </div>
            </div>
            <a href={`/beans/${bean._id}/#details`}>View details</a>
          </div>
        );
      })}
    </div>
  );
}

const CartButton = ({ items, id }) => {
  return (
    <a href={`/beans/${id}/#cart`} className="cart__button">
      <div className="cart__button--container">
        <img
          src={cart}
          alt="view items in your cart"
          width={40}
          height={40}
        />
        {items > 0 ? <span>{items}</span> : null}
      </div>
    </a>
  )
}


const Cart = ({ items }) => {
  
  const [total, setTotal] = useState(0.00);
  
  const increment = () => {

  }
  const decrement = () => {

  }

  useEffect(() => {
    function sum(a, b) {
      return parseFloat(a) + parseFloat(b.price);
    }
    if (items.length) {
      const $total = items.reduce(sum, 0);
      setTotal($total);
    }
  }, [items]);
  return (
    <div className="cart" id="cart">
      <p className="text-center bold-500">My Cart</p>
      <p className="text-center count">
        You have {items.length} items in your cart
      </p>
      <div className="cart__list">
        <div>
          {items.map((item) => {
            return (
              <div
                key={item._id + item.title}
                className="cart__item flex flex-just-align-start"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  width={50}
                  height={80}
                  className="mr-1"
                />
                <div className="title-weight-quantity">
                  <p className="title bold-500">{item.title}</p>
                  <small className="text-gray">Beans - {item.weight}g</small>
                  <div className="quantity flex flex-between">
                    <h5>${item.price}</h5>
                    <div className="sub__add--group flex flex-between">
                      <button className="sub__button" onClick={decrement}>
                        <img
                          src={minus}
                          alt="subtract from quantity"
                          width="20"
                          height="20"
                        />
                      </button>
                      <p>{item.quantity}</p>
                      <button className="add__button" onClick={increment}>
                        <img
                          src={plus}
                          alt="add more to quantity"
                          width="20"
                          height="20"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {items.length ? (
          <>
            <div className="flex flex-between">
              <p className="text-gray">Items total</p>
              <p>${total}</p>
            </div>
            <div className="flex flex-between">
              <p className="text-gray">Discounts</p>
              <p>- ${"5.00"}</p>
            </div>
            <div className="flex flex-between">
              <p className="text-gray">Total</p>
              <p>${total - 5.0}</p>
            </div>
          </>
        ) : null}

        <div className="flex flex-center">
          <button className="checkout">Checkout</button>
        </div>
      </div>
    </div>
  );
}