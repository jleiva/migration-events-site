import { useState } from "react";
import { Header } from "./Header";
import { MainContent } from "./MainContent";
import { EventCard } from "./EventCard";
import fetchEventsByCategories from "../../services/api";

const Home = () => {
  const [categoryData, setCategoryData] = useState([]);

  const onTabChange = (e) => {
    const category = e.target.dataset.category;

    fetchEventsByCategories(category).then((data) => setCategoryData(data));
  };

  return (
    <>
      <Header onTabChange={onTabChange} />
      <h1>Home</h1>
      <MainContent>
        <ul className="container error-container gallery home-gallery">
          {categoryData.length > 0
            ? categoryData.map((category) => {
                return (
                  <EventCard
                    key={category.id}
                    eventId={category.id}
                    price={category.price}
                    date={category.date}
                    title={category.title}
                    image={category.image}
                    location={category.location}
                  />
                );
              })
            : null}
        </ul>
      </MainContent>
    </>
  );
};

export default Home;
