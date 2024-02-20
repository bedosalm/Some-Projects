import Layout from '/components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import '/styles/globals.css';
import '/styles/MenuNav.css';
import { SSRProvider } from 'react-bootstrap';



export default function App({ Component, pageProps }) {
  return (
    <SSRProvider>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    </SSRProvider>
  )
}
