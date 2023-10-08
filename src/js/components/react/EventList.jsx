import { EventCard } from "./EventCard";
import useEventListWithSWR from "./hooks/useEventListWithSWR";

const EventList = ({ categoryId = "music" }) => {
  const { data, isLoading, error } = useEventListWithSWR(categoryId);

  if (isLoading) {
    return (
      <div style={{ display: "flex", margin: "0 auto", width: "80%" }}>
        <div className="skeleton" />
        <div className="skeleton" />
        <div className="skeleton" />
        <div className="skeleton" />
      </div>
    );
  }

  if (error) {
    return <div>Algun mensaje de error</div>;
  }

  return (
    <ul className="container error-container gallery home-gallery">
      {data.length > 0
        ? data.map((category) => {
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
  );
};

export { EventList };
