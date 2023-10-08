import { useState } from "react";

const GoingMessage = ({ handleGoingClick }) => {
  return (
    <>
      <span className="check">✔</span>
      <div>
        <p>You`re going to this event!.</p>
        <button className="button-link" onClick={handleGoingClick}>
          Changed your mind?
        </button>
      </div>
    </>
  );
};

const InterestedMessage = ({ handleGoingClick, handleInterstedClick }) => {
  const handleClick = () => {
    handleInterstedClick();
    handleGoingClick();
  };

  return (
    <>
      <div>
        <p>You`re interested in going.</p>
        <button className="button-link" onClick={handleInterstedClick}>
          Changed your mind?
        </button>
      </div>
      <button className="going" onClick={handleClick}>
        Going!
      </button>
    </>
  );
};

// Todo lo relacionado con localStorage se podria mover
// a un custom hook.

// Falta remover eventos de las listas cuando deja de ser favorito, etc
export const EventInteractions = (props) => {
  const [going, setGoing] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [intersted, setIntersted] = useState(false);

  const getLocalEvents = () =>
    JSON.parse(window.localStorage.getItem("events")) || {};

  const handleGoingClick = () => {
    const localEvents = getLocalEvents();
    const prevGoing = localEvents?.going || [];

    window.localStorage.setItem(
      "events",
      JSON.stringify({
        ...localEvents,
        going: [...prevGoing, props],
      }),
    );

    setGoing(!going);
  };

  const handleFavoriteClick = () => {
    const localEvents = getLocalEvents();
    const prevFavorites = localEvents?.favorites || [];

    window.localStorage.setItem(
      "events",
      JSON.stringify({
        ...localEvents,
        favorites: [...prevFavorites, props],
      }),
    );

    setFavorite(!favorite);
  };

  const handleInterstedClick = () => {
    const localEvents = getLocalEvents();
    const prevIntersted = localEvents?.intersted || [];

    window.localStorage.setItem(
      "events",
      JSON.stringify({
        ...localEvents,
        intersted: [...prevIntersted, props],
      }),
    );

    setIntersted(!intersted);
  };

  return (
    <>
      <div className="interactions-container">
        {going || intersted ? null : (
          <div className="going-and-interested">
            <button className="going" onClick={handleGoingClick}>
              Going!
            </button>
            <button className="interested" onClick={handleInterstedClick}>
              Interested
            </button>
          </div>
        )}
        <button
          className={`heart ${favorite ? "heart-blue" : ""}`}
          aria-label="Favorite"
          onClick={handleFavoriteClick}
        ></button>
      </div>

      {going ? <GoingMessage handleGoingClick={handleGoingClick} /> : null}
      {intersted ? (
        <InterestedMessage
          handleGoingClick={handleGoingClick}
          handleInterstedClick={handleInterstedClick}
        />
      ) : null}
    </>
  );
};
