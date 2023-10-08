import { useState } from "react";
import { Header } from "./Header";
import { MainContent } from "./MainContent";
import { EventCard } from "./EventCard";
import { EventList } from "./EventList";
import useEventByCategoryList from "./hooks/useEventList";

const Home = () => {
  const [categoryId, setCategoryId] = useState();
  const [eventList, status, setEventList] = useEventByCategoryList();

  const onTabChange = (e) => {
    const category = e.target.dataset.category;

    setCategoryId(category);
    // setEventList(category);
  };

  return (
    <>
      <Header onTabChange={onTabChange} />
      <MainContent>
        {/* Todo esto se puede mover a un componente especifico
        el reto es como "conectarlo" con los handlers para tab */}
        {/* {status === "loading" && <div>Un spinner aquí</div>}
        {status === "loaded" && (
          <ul className="container error-container gallery home-gallery">
            {eventList.length > 0
              ? eventList.map((category) => {
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
        )} */}
        <EventList categoryId={categoryId} />
      </MainContent>
    </>
  );
};

export default Home;
