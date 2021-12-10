import React from 'react';
import styles from './Header.module.css';
import Image from 'next/image'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.siteName}>WISBOOK</h1>
      <Image
        src='/images/undraw_meditation_re_gll0.svg'
        width={300}
        height={200}
        className={styles.image}
      />
    </header>
  );
};

export default Header;
