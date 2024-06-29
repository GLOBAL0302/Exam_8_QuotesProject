import React, {ChangeEvent, useState} from 'react';
import {IUserInput} from '../../types';
import axiosApi from '../../axiosApi';
import {useNavigate} from 'react-router-dom';

const initialFormState:IUserInput = {
  category:"",
  author:"",
  userQuote:""
};

const QuoteForm = () => {
  const [userInput, setUserInput] = useState<IUserInput>(initialFormState);
  const navigate = useNavigate();

  const onChange =(event:React.ChangeEvent<HTMLInputElement>)=>{
    const {name, value} = event.target;
    setUserInput((prevState)=>({
      ...prevState,
      [name]: value
    }));
  };

  const onClickSelect = (event:ChangeEvent)=>{
    const {value} = event.target;
    setUserInput((prevState)=>({
      ...prevState,
      category: value
    }));
  };

  const onFormSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    axiosApi.post("/quotes.json", userInput);
    navigate("/");
  };

  return (
    <div className="p-5 bg-light">
      <form onSubmit={onFormSubmit}>
        <select
          onChange={onClickSelect}
          className="form-select form-select-lg mb-3 fs-3"
          aria-label="Large select example"
        >
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
            required
            onChange={onChange}
            name="userQuote"
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default QuoteForm;