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
