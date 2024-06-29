import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { IUserInput } from '../../types';
import axiosApi from '../../axiosApi';
import { useNavigate, useParams } from 'react-router-dom';

const initialFormState: IUserInput = {
  category: '',
  author: '',
  userQuote: '',
};

const QuoteForm = () => {
  const [userInput, setUserInput] = useState<IUserInput>(initialFormState);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const fetchQuoteData = useCallback(async () => {
    if (id) {
      const response = await axiosApi.get(`/quotes/${id}.json`);
      setUserInput(response.data);
    }
  }, [id]);

  useEffect(() => {
    void fetchQuoteData();
  }, [fetchQuoteData]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onClickSelect = (event: ChangeEvent) => {
    const { value } = event.target;
    setUserInput((prevState) => ({
      ...prevState,
      category: value,
    }));
  };

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      if (id) {
        axiosApi.put(`/quotes/${id}.json`, userInput);
      } else {
        axiosApi.post('/quotes.json', userInput);
      }
    } catch (e) {
      throw new Error(e);
    } finally {
      setIsLoading(false);
      navigate('/');
    }
  };
  return (
    <div className="p-5 bg-light">
      <form onSubmit={onFormSubmit}>
        <select
          required
          onChange={onClickSelect}
          className="form-select form-select-lg mb-3 fs-3"
          aria-label="Large select example"
        >
          <option>Please choose category</option>
          <option>Star_Wars</option>
          <option>Famous_People</option>
          <option>Saying</option>
          <option>Humor</option>
          <option>Motivational</option>
        </select>
        <div className="input-group input-group-lg mb-3">
          <span className="input-group-text" id="inputGroup-sizing-lg">
            <strong>Author:</strong>
          </span>
          <input
            value={userInput.author}
            required
            onChange={onChange}
            name="author"
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
          />
        </div>
        <div className="input-group input-group-lg mb-3">
          <span className="input-group-text" id="inputGroup-sizing-lg">
            <strong>Quote:</strong>
          </span>
          <input
            value={userInput.userQuote}
            required
            onChange={onChange}
            name="userQuote"
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
          />
        </div>
        {isLoading ? (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <button type="submit" className="btn btn-primary">
            {id ? 'Save change' : 'Submit'}
          </button>
        )}
      </form>
    </div>
  );
};

export default QuoteForm;
