import { AppProps } from 'next/app';
import Head from 'next/head';
import { Layout } from '../components/layout/layout';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>gdate</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default CustomApp;
