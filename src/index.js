import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import App from './App';

import './styles/globals.css'
import './styles/footer.css';
import './styles/download-app.css';
import './styles/view-all.css';
import './styles/our-products.css';
import './styles/how-its-works.css';
import './styles/intro.css';
import './styles/mobile-app.css';

import './styles/shop.css';

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);
