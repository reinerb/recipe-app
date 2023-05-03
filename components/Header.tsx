import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Link from 'next/link';

interface Props {}

function Header(props: Props) {
  const {} = props;

  return (
    <header className='flex flex-col items-center gap-1 bg-amber-200 px-8 py-4 dark:bg-amber-800 md:flex-row md:justify-between'>
      <Link
        href='/'
        id='logo'
        className='flex items-center gap-3'
      >
        <FontAwesomeIcon
          className='text-2xl'
          icon={faUtensils}
        />
        <span className='text-3xl'>Recipe App</span>
      </Link>
      <nav>
        <ul className='flex gap-5'>
          <li>
            <Link href='/'>Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
