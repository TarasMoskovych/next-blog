import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import ThemeProvider from 'src/providers/ThemeProvider';
import 'highlight.js/styles/base16/darcula.css';
import 'highlightjs-copy/styles/highlightjs-copy.css';
import 'src/styles/index.scss';
import highlight from 'highlight.js';
import CopyButtonPlugin from 'highlightjs-copy';

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    highlight.addPlugin(new CopyButtonPlugin());
    highlight.configure({ ignoreUnescapedHTML: true });
  }, []);

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
