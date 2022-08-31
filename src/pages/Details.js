import { useParams, Link } from 'react-router-dom';
import logo from '../images/logo.png';

export default function Details() {
    const params = useParams();
    return (
        <div className="shop">
            <Header />
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