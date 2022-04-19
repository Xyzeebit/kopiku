import Layout from '../components/Layout';

import '../styles/globals.css'
import '../styles/footer.css';
import '../styles/download-app.css';
import '../styles/view-all.css';
import '../styles/our-products.css';
import '../styles/how-its-works.css';


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
  
}

export default MyApp
