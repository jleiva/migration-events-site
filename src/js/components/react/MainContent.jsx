import { EventCard } from "./EventCard";
import Tabs from "./Tabs";
import { homeTabs } from "../../config";

// Descomentar Tabs en linea 10 y comentar el ul de linea 11 para jugar con
// la otra opción

const MainContent = ({ categoryData }) => {
  return (
    <main id="main-gallery" className="main-gallery main-container">
      {/* <Tabs categories={homeTabs} /> */}
      <ul className="container error-container gallery home-gallery">
        {categoryData.length > 0
          ? categoryData.map((category) => {
              return (
                <EventCard
                  key={category.id}
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
    </main>
  );
};

export { MainContent };
