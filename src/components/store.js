import ethio_bag from '../images/ethio-bag-alt.jpg';
import guata_bag from '../images/guata-bag-alt.jpg';
import costa_bag from '../images/costa-bag-alt.jpg';
import peru_bag from '../images/peru-bag-alt.jpg';
import indo_bag from '../images/indo-bag-alt.jpg';

import icon_bag from '../images/shopping-bag.svg'
import icon_money from '../images/icon-money.svg';
import icon_satellite from '../images/icon-satellite-dish.svg';

export const appTheme = {
    primary: 'rgb(244, 107, 12)',
    secondary: '#212621',
    accent: '#ccc',
    text: '#fff',
    background: '#1f2123',
    foreground: '#ddd',
}

export const appStore = {
  cart: [],
  menuItems: ["Home", "How it works", "Product", "Help"],
  howItWorks: [
    {
      _id: "i83787dhla",
      icon: icon_bag,
      title: "Select Product",
      description: `Browse through our vast collection of products and select the item that catches your interest.`,
    },
    {
      _id: "i83f787dhla",
      icon: icon_money,
      title: "Make Payment",
      description: `After selecting the product you wish to purchase, proceed to the secure checkout process. We offer a range of convenient and reliable payment options to ensure a seamless transaction.`,
    },
    {
      _id: "i83787d63hla",
      icon: icon_satellite,
      title: "Receive Product",
      description: `Once the payment process is successfully completed, we initiate the order fulfillment procedure.`,
    },
  ],
  products: {
    coffee: {},
    tea: {},
    snack: {},
    beans: [
      {
        _id: "1232sh92",
        image: ethio_bag,
        title: "Ethiopian Beans",
        description: `Selected coffee beans with the best quality from Ethiopia`,
        price: "33.50",
        rating: 4.8,
      },
      //   {
      //     _id: "1232brush92",
      //     image: "ethio-bag.png",
      //     title: "Ethiopian Beans",
      //     description: `Selected coffee beans with the best quality from Ethiopia`,
      //     price: 33.5,
      //   },
      {
        _id: "1232gfdsh92",
        image: guata_bag,
        title: "Guatemala Beans",
        description: `Selected coffee beans with the best quality from Guatemala`,
        price: "35.00",
        rating: 4.9,
      },
      {
        _id: "12ew32sh92",
        image: costa_bag,
        title: "Costa-Rica Beans",
        description: `Selected coffee beans with the best quality from Costa Rica`,
        price: "34.00",
        rating: 4.5,
      },
      {
        _id: "123we2sh92",
        image: peru_bag,
        title: "Peru Beans",
        description: `Selected coffee beans with the best quality from Peru`,
        price: "30.00",
        rating: 4.6,
      },
      {
        _id: "1232shds92",
        image: indo_bag,
        title: "Indonesia Beans",
        description: `Selected coffee beans with the best quality from Indonesia`,
        price: "35.00",
        rating: 4.8,
      },
    ],
  },
};
