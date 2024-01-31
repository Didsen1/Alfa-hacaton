import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import styles from './Quotes.module.scss';
import { fetchQuotesWithLimit } from '../model/quotesApi';

const options = [5, 10, 20, 30];

export const Quotes = () => {
  const [numberOfQuotes, setNumberOfQuotes] = useState(10);
  // Using a query hook automatically fetches data and returns query values
  const dispatch = useAppDispatch();
  const { error, isError, isLoading, quotes } = useAppSelector((state) => state.quotes);

  useEffect(() => {
    dispatch(fetchQuotesWithLimit(numberOfQuotes));
  }, [dispatch, numberOfQuotes]);

  if (isError) {
    return (
      <div>
        <h1>There was an error!!! {`${error[-1]}`}</h1>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (!isError) {
    return (
      <div className={styles.container}>
        <Link to="/">Back</Link>
        <h3>Select the Quantity of Quotes to Fetch:</h3>
        <select
          className={styles.select}
          value={numberOfQuotes}
          onChange={(e) => {
            setNumberOfQuotes(Number(e.target.value));
          }}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {quotes?.map(({ author, quote, id }) => (
          <blockquote key={id}>
            &ldquo;{quote}&rdquo;
            <footer>
              <cite>{author}</cite>
            </footer>
          </blockquote>
        ))}
      </div>
    );
  }

  return null;
};
