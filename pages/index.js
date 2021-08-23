import { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import QuoteContent from '../components/QuoteContent/QuoteContent';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://quotes.rest/qod');
        const data = await res.json();
        const { contents } = data;
        const { quotes } = contents;
        setQuotes(quotes);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      {quotes.map((quote) => (
        <div key={quote.id}>
          <Header>
            <h1 className={styles.siteName}> WISBOOK</h1>
          </Header>
          <QuoteContent
            id={quote.id}
            author={quote.author}
            quote={quote.quote}
            date={quote.date}
            tags={quote.tags}
            category={quote.category}
          />
        </div>
      ))}
      <div className={styles.signature}>
        <p>Created by Paa Bamfo @ {new Date().getFullYear()}</p>
      </div>
    </div>
  );
}
