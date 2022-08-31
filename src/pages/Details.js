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