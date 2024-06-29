import React, {useCallback, useEffect, useState} from 'react';
import {IApiQuotes, IQuote} from '../../types';
import Quote from './Quote/Quote';
import axiosApi from '../../axiosApi';
import {useParams} from 'react-router-dom';

const Quotes= () => {
  const [allQuotes, setAllQuotes] = useState<IQuote[]>([
  ]);

  const {category} = useParams();

  const fetchQuoteData = useCallback(async ()=>{
    let response;
    let quotes;

    try {
      if (category !== "All"){
        response =await axiosApi.get<IApiQuotes | null>(`/quotes.json?orderBy="category"&equalTo="${category}"`);
      }else {
        response =await axiosApi.get<IApiQuotes | null>("/quotes.json");
      }

    }catch (e){
      throw new Error(e);
    }
    finally {
      const quotesResponse = response.data;
      if(quotesResponse){
        quotes = Object.keys(response.data).map((id:string)=>({
          ...response.data[id],
          id,
        }));
      }
      setAllQuotes(quotes);
    }

  },[category]);

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