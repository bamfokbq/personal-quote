import React from 'react';
import styles from './QuoteContent.module.css';

const QuoteContent = ({ author, quote, date, tags, category }) => {
  console.log(tags);
  return (
    <section className={styles.content}>
      <p className={styles.date}>Date: {date}</p>
      <h3 className={styles.author}>Author: {author}</h3>
      <p className={styles.quote}>{quote}</p>
      <p className={styles.category}>Category: {category}</p>
    </section>
  );
};

export default QuoteContent;
