import Link from 'next/link';
import Image from 'next/image';
import logo from 'public/logo.svg';
import ScrollProgress from 'src/components/ScrollProgress';

type Props = {
  scrollProgress: boolean;
};

const Header = ({ scrollProgress }: Props) => {
  return (
    <header className='nb-header'>
      <div className='nb-header__wrapper'>
        <Link href="/">
          <div className='nb-header__logo-wrapper'>
            <Image src={logo} width={'42px'} height={'42px'} alt=''/>
            <h1 className='nb-header__title'>Next Blog</h1>
          </div>
        </Link>
      </div>
      {scrollProgress &&
        <ScrollProgress />
      }
    </header>
  );
};

export default Header;
