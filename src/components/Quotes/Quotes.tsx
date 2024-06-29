import React, {useCallback, useEffect, useState} from 'react';
import {IApiQuotes, IQuote} from '../../types';
import Quote from './Quote/Quote';
import axiosApi from '../../axiosApi';

// interface Props{
//   link:string
// }
const Quotes= () => {
  const [allQuotes, setAllQuotes] = useState<IQuote[]>([
  ]);

  const fetchQuoteData = useCallback(async ()=>{
    const response =await axiosApi.get<IApiQuotes | null>("/quotes.json");
    const quotesResponse = response.data;
    if(quotesResponse){
      const quotes = Object.keys(response.data).map((id:string)=>({
        ...response.data[id],
        id,
      }));

      setAllQuotes(quotes);
    }
  },[]);

  useEffect(() => {
    void  fetchQuoteData();
  }, [fetchQuoteData]);



  return (
    <div className="col-8">
      {allQuotes.map((quote)=>(
        <Quote
          key={quote.id}
          quote={quote}/>
      ))}
    </div>
  );
};

export default Quotes;