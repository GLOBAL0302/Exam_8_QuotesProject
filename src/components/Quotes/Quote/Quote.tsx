import React from 'react';
import {IQuote} from '../../../types';
interface Props{
  quote:IQuote
}

const Quote:React.FC<Props> = ({quote}) => {
  return (
    <>
      <div className="card mb-3">
        <div className="card-body d-flex">
          <p className="col-6">	&#171;{quote.userQuote} &#187;</p>
          <div className="ms-auto d-flex gap-3">
            <button type="button" className="btn btn-success" style={{width:"100px"}}><strong>Edit</strong></button>
            <button type="button" className="btn btn-danger" style={{width:"100px"}}><strong>Delete</strong></button>
          </div>
        </div>
        <div className="card-footer">
          <p>&#8212; <strong>{quote.author}</strong></p>
        </div>
      </div>
    </>
  );
};

export default Quote;