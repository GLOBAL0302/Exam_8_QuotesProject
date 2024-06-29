import React from 'react';
import {IQuote} from '../../types';
import Quote from './Quote/Quote';

interface Props{
  quotes:IQuote[]
}
const Quotes:React.FC<Props> = ({quotes}) => {
  return (
    <div className="col-8">
      {quotes.map((quote)=>(
        <Quote
          key={quote.id}
          quote={quote}/>
      ))}
    </div>
  );
};

export default Quotes;