import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'highlight.js/styles/base16/darcula.css';
import 'src/styles/index.scss';

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
