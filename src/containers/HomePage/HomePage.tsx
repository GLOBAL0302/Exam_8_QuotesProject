import Quotes from '../../components/Quotes/Quotes';
import Category from '../../components/Category/Category';


const HomePage = () => {

  return (
    <div className="d-flex gap-5">
      <Category/>
      <Quotes/>

    </div>
  );
};

export default HomePage;
