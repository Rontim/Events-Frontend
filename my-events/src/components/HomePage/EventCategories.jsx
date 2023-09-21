import "bootstrap/dist/css/bootstrap.min.css";

const EventCategories = ({ categories, onSelectCategory }) => {
  <div className="event-categories container col">
    <h2 className="row">Event Categories</h2>
    <ul>
      {categories.map((category, index) => (
        <li key={index}>
          <button onClick={() => onSelectCategory(category)}>{category}</button>
        </li>
      ))}
    </ul>
  </div>;
};

export default EventCategories;
