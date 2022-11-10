import Link from 'next/link';
import Image from 'next/image';
import logo from 'public/logo.svg';

const Header = () => {
  return (
    <header className='nb-header'>
      <div className='nb-header__wrapper'>
        <Link href="/">
          <div className='nb-header__logo-wrapper'>
            <Image src={logo} width={'48px'} height={'48px'} />
            <h1 className='nb-header__title'>Next Blog</h1>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
