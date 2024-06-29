import React from 'react';
import { IQuote } from '../../../types';
import { NavLink, useNavigate } from 'react-router-dom';
import AxiosApi from '../../../axiosApi';

interface Props {
  quote: IQuote;
}

const Quote: React.FC<Props> = ({ quote }) => {
  const navigate = useNavigate();

  const deleteQuoteFunc = async (quote: IQuote) => {
    try {
      await AxiosApi.delete(`/quotes/${quote.id}.json`);
    } catch (e) {
      throw new Error(e);
    } finally {
      navigate('/');
    }
  };
  return (
    <>
      <div className="card mb-3">
        <div className="card-body d-flex">
          <p className="col-6"> &#171;{quote.userQuote} &#187;</p>
          <div className="ms-auto d-flex gap-3 align-items-center">
            <NavLink
              to={`/quotes/${quote.id}/edit`}
              className="btn btn-success"
              style={{ width: '100px' }}
            >
              <strong>Edit</strong>
            </NavLink>
            <button
              onClick={() => deleteQuoteFunc(quote)}
              type="button"
              className="btn btn-danger"
              style={{ width: '100px' }}
            >
              <strong>Delete</strong>
            </button>
          </div>
        </div>
        <div className="card-footer">
          <p>
            &#8212; <strong>{quote.author}</strong>
          </p>
        </div>
      </div>
    </>
  );
};

export default Quote;
