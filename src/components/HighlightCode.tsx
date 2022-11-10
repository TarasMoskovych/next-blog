import { useEffect, createRef } from 'react';
import highlight from 'highlight.js';

type Props = {
  children: JSX.Element;
  language: string;
  filename?: string;
};

const HighlightCode = ({ children, language, filename }: Props) => {
  const code = createRef<HTMLElement>();

  useEffect(() => {
    highlight.configure({ ignoreUnescapedHTML: true });
    highlight.highlightElement(code.current as HTMLElement);
  }, []);

  return (
    <pre>
      <code ref={code} className={language}>
        {filename &&
          filename  + '\n\n'
        }
        {children}
      </code>
    </pre>
  );
};

export default HighlightCode;
