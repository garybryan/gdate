import { AppProps } from 'next/app';
import Head from 'next/head';
import { Layout } from '../components/layout/layout';
import './styles.css';

export default function CustomApp({ Component, pageProps }: AppProps) {
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

