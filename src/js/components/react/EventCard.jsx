import { Link } from "react-router-dom";
import formatDate from "../../utils/format-date";
import { EventInteractions } from "./EventInteractions";

const EventCard = (props) => {
  return (
    <li className="gallery__card">
      <img src={props.image} alt={props.title} />
      <div className="gallery__text">
        <div className="event__info">
          <h3>
            <Link to={`/event/${props.eventId}`}>{props.title}</Link>
          </h3>
          <p className="date">{formatDate(new Date(props.date))}.</p>
          <p>
            {props.location.address} • {props.location.city},{" "}
            {props.location.state}.
          </p>
          <strong>{props.price}</strong>
        </div>
        <EventInteractions {...props} />
      </div>
    </li>
  );
};

export { EventCard };
