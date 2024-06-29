import {useCallback, useEffect, useState} from 'react';
import {IApiQuotes, IQuote} from '../../types';
import axiosApi from '../../axiosApi';
import Quotes from '../../components/Quotes/Quotes';

const HomePage = () => {
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
    <>
      <Quotes quotes = {allQuotes}/>

    </>
  );
};

export default HomePage;
