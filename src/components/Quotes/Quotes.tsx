import React from 'react';
import {IQuote} from '../../types';
import Quote from './Quote/Quote';

interface Props{
  quotes:IQuote[]
}
const Quotes:React.FC<Props> = ({quotes}) => {
  return (
    <>
      {quotes.map((quote)=>(
        <Quote
          key={quote.id}
          quote={quote}/>
      ))}
    </>
  );
};

export default Quotes;