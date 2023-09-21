import Footer from "../components/Footer";
import Layout from "../components/Layout";
import PageHeader from "../components/HomePage/PageHeader";
import FeaturedEvents from "../components/HomePage/FeaturedEvents";

import "../assets/css/home.css";
import EventCategories from "../components/HomePage/EventCategories";

const featuredEvents = [
  {
    id: 1,
    name: "Music Fest 2023",
    image: "event1.jpg",
    description: "Join us for the biggest music festival of the year!",
  },
  {
    id: 2,
    name: "Sports Championship",
    image: "event2.jpg",
    description: "Cheer for your favorite team in this exciting championship.",
  },
  {
    id: 3,
    name: "Tech Conference",
    image: "event3.jpg",
    description: "Explore the latest trends in technology and innovation.",
  },
];

const categories = ["Music", "Sports", "Conferences", "Workshops", "Art"];

function HomePage() {
  const handleCategorySelection = (selectedCategory) => {
    console.log(`Selected category: ${selectedCategory}`);
  };

  return (
    <Layout>
      <PageHeader />
      <div className="main">
        <FeaturedEvents events={featuredEvents} />
        <div className="event-categories container col">
          <h2 className="row">Event Categories</h2>
          <ul>
            {categories.map((category, index) => (
              <li key={index}>
                <button onClick={() => handleCategorySelection(category)}>
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
        ;
      </div>
      <Footer />
    </Layout>
  );
}

export default HomePage;
