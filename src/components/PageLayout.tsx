import { Container } from 'react-bootstrap';
import Head from 'next/head';
import Navbar from 'src/components/Navbar';
import Footer from 'src/components/Footer';

type Props = {
  children: JSX.Element;
  className?: string;
  title?: string;
};

const PageLayout = ({ children, className, title = 'Next Blog' }: Props) => {
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

export default PageLayout;
