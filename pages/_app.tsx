import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/index.scss';

export default ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};
