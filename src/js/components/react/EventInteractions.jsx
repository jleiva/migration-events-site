import { useState } from "react";

const GoingMessage = ({ handleGoingClick }) => {
  console.log("handleGoingClick", handleGoingClick);
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

export const EventInteractions = () => {
  const [going, setGoing] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [intersted, setIntersted] = useState(false);

  const handleGoingClick = () => setGoing(!going);

  const handleFavoriteClick = () => {
    setFavorite(!favorite);
  };

  const handleInterstedClick = () => setIntersted(!intersted);

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
