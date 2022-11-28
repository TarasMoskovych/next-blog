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
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
        <link href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap' rel='stylesheet' />
        <link href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0&display=swap' rel='stylesheet' />
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
