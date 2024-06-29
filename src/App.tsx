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
      </Routes>
    </>
  );
};

export default App;
