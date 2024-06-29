import {useCallback, useEffect, useState} from 'react';
import {IApiQuotes, ICategories, IQuote, IUserInput} from '../../types';
import axiosApi from '../../axiosApi';
import Quotes from '../../components/Quotes/Quotes';
import Category from '../../components/Category/Category';



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
    <div className="d-flex gap-5">
      <Category/>
      <Quotes quotes = {allQuotes}/>
    </div>
  );
};

export default HomePage;
