import './App.css';
import HomePage from './containers/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';
import QuoteFormPage from './containers/QuoteFormPage/QuoteFormPage';
import {Route, Routes} from 'react-router-dom';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/quoteForm" element={<QuoteFormPage/>}/>
        <Route path="/quotes/:category" element={<HomePage/>}/>
        <Route path="*" element={<div className="bg-light p-5"><h3>Current Page does not exist</h3></div>}></Route>
      </Routes>
    </>
  );
};

export default App;
