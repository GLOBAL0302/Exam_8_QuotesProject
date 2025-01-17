import React, { useCallback, useEffect, useState } from 'react';
import { IApiQuotes, IQuote } from '../../types';
import Quote from './Quote/Quote';
import axiosApi from '../../axiosApi';
import { useParams } from 'react-router-dom';

const Quotes = () => {
  const [allQuotes, setAllQuotes] = useState<IQuote[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { category } = useParams();
  const fetchQuoteData = useCallback(async () => {
    let response;
    let quotes;
    setIsLoading(true);

    try {
      if (category) {
        response = await axiosApi.get<IApiQuotes | null>(
          `/quotes.json?orderBy="category"&equalTo="${category}"`,
        );
      } else if (category === undefined) {
        response = await axiosApi.get<IApiQuotes | null>('/quotes.json');
      } else {
        response = await axiosApi.get<IApiQuotes | null>('/quotes.json');
      }
    } catch (e) {
      throw new Error(e);
    } finally {
      const quotesResponse = response.data;
      if (quotesResponse) {
        quotes = Object.keys(response.data).map((id: string) => ({
          ...response.data[id],
          id,
        }));
      }
      setAllQuotes(quotes);
      setIsLoading(false);
    }
  }, [category]);

  useEffect(() => {
    void fetchQuoteData();
  }, [fetchQuoteData]);

  return isLoading ? (
    <div
      className="spinner-border d-flex justify-content-center align-items-center"
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  ) : (
    <div className="col-8">
      {allQuotes.map((quote) => (
        <Quote key={quote.id} quote={quote} />
      ))}
    </div>
  );
};

export default Quotes;
