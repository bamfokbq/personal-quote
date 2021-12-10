import React from 'react';
import styles from './QuoteContent.module.css';

const QuoteContent = ({ author, quote, date, tags }) => {
  return (
    <section className={styles.content}>
      <p className={styles.date}>Date: {date}</p>
      <h3 className={styles.author}>Author: {author}</h3>
      <p className={styles.quote}>{quote}</p>
      <div className={styles.category}>
        <span> Tags:</span>
        {tags.map((tag) => (
          <p key={tag}> {tag},</p>
        ))}
      </div>
    </section>
  );
};

export default QuoteContent;
