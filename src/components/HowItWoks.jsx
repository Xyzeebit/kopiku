import { useContext } from 'react';
import { StoreContext } from './ContextComponents';
//import Link from './Link';

export default function HowItWorks() {

  const [store] = useContext(StoreContext);
  const{ howItWorks } = store;

    return (
      <div id="how-it-works" className="how-it-works">
        <div className="how-it-works__intro">
          <a href="/">
            HOW IT WORKS
          </a>
          <div className="how-it-works__intro--header">
            Make an <br />
            order easily
          </div>
        </div>
        {howItWorks.map((item) => (
          <a href={`/how-it-works/${item._id}`} key={item._id}>
            <HowItWorksItem {...item} />
          </a>
        ))}
      </div>
    );
}

const HowItWorksItem = ({ icon, title, description }) => {
    return (
      <div className="how-it-works__item">
        <span><img src={icon} alt={title} className="how-it-works__image" /></span>
        <div className="how-it-works__title">{title}</div>
        <div className="how-it-works__desc">{description}</div>
      </div>
    );
}
