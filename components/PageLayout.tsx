import { Container } from 'react-bootstrap';
import Head from 'next/head';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

type Props = {
  children: JSX.Element,
  className?: string,
  title?: string,
};

export default ({ children, className, title = 'Next Blog' }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        <Navbar />
        <div className={`page-wrapper ${className || ''}`}>
          {children}
        </div>
        <Footer />
      </Container>
    </>
  );
};
