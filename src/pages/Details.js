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
    const [store] = useContext(StoreContext);
    const [item, setItem] = useState({});
    

    useEffect(() => {
        const product = store.products.beans.find( i => i._id === params.id);
        if(product) {
            setItem(product);
        }
    }, [params.id, store.products]);

    return (
        <div className="shop">
            <Header />
            <div className="content">
                <Product item={item} />
            </div>
        </div>
    )
}

const Header = () => {
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
        </header>
    );
}

const Product = ({ item }) => {
    const [selected, setSelected] = useState(1);
    const [fav, setFav] = useState(false);
    const [price, setPrice] = useState(item.price);
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        if (quantity < 1001) {
            const $price = item.price * (quantity + 1);
            setQuantity(quantity + 1);
            setPrice(parseFloat($price).toFixed(2));
        }
    }
    const decrement = () => {
        if (quantity > 0) {
            const $price = price - item.price;
            setQuantity(quantity - 1);
            setPrice(parseFloat($price).toFixed(2));
        }
    }

    return (
      <div className="detail">
        <div className="detail__bar">
          <Link to="/">
            <img
              src={arrow}
              alt="go back to home page"
              width="25"
              height="20"
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
            onClick={() => setSelected(1)}
          >
            250g
          </button>
          <button
            className={`${selected === 2 ? "selected" : ""}`}
            onClick={() => setSelected(2)}
          >
            500g
          </button>
          <button
            className={`${selected === 3 ? "selected" : ""}`}
            onClick={() => setSelected(3)}
          >
            750g
          </button>
        </div>
        <div className="sub__add--group">
          <button className="sub__button" onClick={decrement}>
            <img
              src={minus}
              alt="subtract from quantity"
              width="25"
              height="25"
            />
          </button>
          <p>{quantity}</p>
          <button className="add__button" onClick={increment}>
            <img src={plus} alt="add more to quantity" width="25" height="25" />
          </button>
        </div>
        <div className="add-to__cart--group">
          <div className="price__group">
            <p>Total Price:</p>
            <h5>${price ? price : item.price}</h5>
          </div>
          <button className="add__to--cart">
            <img src={cart} alt="add item to cart" width="25" height="25" />
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    );
}