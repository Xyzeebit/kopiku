import { useContext, useEffect, useRef, useState } from 'react';
import { ThemeContext } from './ContextComponents';
//import Link from 'next/link';
import { isInViewport, screenScroll } from './in-viewport';
import woman_with_mug from '../images/woman-with-mug.png';

export default function ViewAll() {
    const [theme] = useContext(ThemeContext);
    const offerImageRef = useRef();
    const [offerSubcribersEmail, setOfferSubscribersEmail] = useState('');

    useEffect(() => {
        screenScroll(() => {
            if (isInViewport(offerImageRef.current)) {
                offerImageRef.current.classList.add(
                    "animate__view-all__offers--image"
                );
            }
        });
        return window.removeEventListener('scroll', screenScroll);
    }, []);

    return (
      <div className="view-all">
        <div className="view-all__button-container">
          <a href="/" className="view-all__button">View All Products</a>
        </div>

        <div
          className="view-all__offers"
          style={{ backgroundColor: theme.background }}
        >
          <div className="view-all__offers--image-container">
            <img
              src={woman_with_mug}
              alt="Offers"
              className="view-all__offers--image"
              ref={offerImageRef}
            />
          </div>

          <div className="view-all__offers--text-container">
            <div className="view-all__offers--text-header">
              Get 30% Off <span>of</span> <br /> Your First Purchase
            </div>
            <form className="view-all__offers-signup-form"
              onSubmit={evt => {
                evt.preventDefault();
                setOfferSubscribersEmail('');
              }}
            >
              <label htmlFor="offer-input">
                Enter your email below to receive your discount code.
              </label>
              <div className="offer-form-group">
                <input
                  type="email"
                  id="offer-input"
                  placeholder="Enter your email..."
                  className="offer-input"
                  autocomplete="off"
                  value={offerSubcribersEmail}
                  onChange={evt => setOfferSubscribersEmail(evt.target.value)}
                />
                <input
                  type="submit"
                  defaultValue="Submit"
                  className="submit-for-offer"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}
