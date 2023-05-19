import Head from 'next/head';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import ScrollTopButton from 'src/components/ScrollTopButton';

type Props = {
  children: JSX.Element;
  className?: string;
  title?: string;
  scrollProgress?: boolean;
};

const PageLayout = ({ children, className, title = 'Next Blog', scrollProgress = false }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
        <link href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap' rel='stylesheet' />
        <link href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0&display=swap' rel='stylesheet' />
      </Head>
      <div className='root'>
        <Header scrollProgress={scrollProgress} />
        <main className={`nb-page-wrapper ${className || ''}`}>
          {children}
          <ScrollTopButton />
        </main>
        <Footer />
      </div>
      <div className='theme-clipper' />
    </>
  );
};

export default PageLayout;
