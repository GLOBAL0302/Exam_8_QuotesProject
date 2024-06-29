import {NavLink} from 'react-router-dom';

const Category= () => {
  const categories = ["Star_Wars", "Famous_People", "Saying", "Humor", "Motivational"];
  return (
    <div className="col-3 bg-light d-flex justify-content-center align-items-center rounded">
      <ul className="list-group flex-column gap-2">
        {categories.map(category =>(
          <li><NavLink to={`/quotes/:${category}`} href="#" className="list-group-item list-group-item-action " aria-current="true">
            {category}
          </NavLink></li>
        ))}
      </ul>
    </div>
  );
};

export default Category;