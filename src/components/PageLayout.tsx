import Head from 'next/head';
import Header from 'src/components/Header';
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
      <Header />
        <main className={`nb-page-wrapper ${className || ''}`}>
          {children}
        </main>
      <Footer />
    </>
  );
};

export default PageLayout;
