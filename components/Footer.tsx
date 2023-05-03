import React from 'react';

interface Props {}

function Footer(props: Props) {
  const {} = props;

  return (
    <footer className='flex justify-center bg-amber-200 px-8 py-4 dark:bg-amber-800'>
      <p>Copyright &copy; Benjamin Reiner, 2023.</p>
    </footer>
  );
}

export default Footer;
