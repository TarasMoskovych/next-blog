import type { AppProps } from 'next/app';
import ThemeProvider from 'src/providers/ThemeProvider';
import 'highlight.js/styles/base16/darcula.css';
import 'src/styles/index.scss';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
