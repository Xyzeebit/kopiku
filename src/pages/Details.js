import { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { StoreContext } from '../components/ContextComponents';

import logo from '../images/logo.png';

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
                <p>{item.description}</p>
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

const Product = () => {
    return (
        <div className="detail">
            <div className="detail__bar">
                <Link to="/">
                    <img src="back" alt="go back to home page" width="25" height="20" />
                </Link>
                <p>Detail item</p>
                <img src="favorite" alt="add to favorite" width="25" height="20" />
            </div>
            <div className="image__container">
                <img src="favorite" alt="add to favorite" width="150" height="100" />
            </div>
            <div className="item__group--title">
                <h3>Beans</h3>
                <div className="badge">
                    <img src="star" alt="star" width="10" height="10" />
                    <span>4.9</span>
                </div>
            </div>
            <p className="sub__title">Coffee Beans</p>
            <p className="pack">Volumn Pack</p>
            <div className="pack__group">
                <button>250g</button>
                <button>500g</button>
                <button>750g</button>
            </div>
            <div className="sub__add">
                <button className="sub__button">
                    <img
                        src="sub"
                        alt="subtract from quantity"
                        width="25"
                        height="25"
                    />
                </button>
                <p>1</p>
                <button className="add__button">
                    <img src="add" alt="add more to quantity" width="25" height="25" />
                </button>
            </div>
            <div className="add-to__cart--group">
                <div className="price__group">
                    <small>Total Price</small>
                    <h4>$42.50</h4>
                </div>
                <button className="add__to--cart">
                    <img
                        src="bag"
                        alt="add item to cart"
                        width="25"
                        height="25"
                    />
                    <span>Add to cart</span>
                </button>
            </div>
        </div>
    );
}