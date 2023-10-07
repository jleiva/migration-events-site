import { Link } from "react-router-dom";
import { homeTabs } from "../../config";

const Header = ({ onTabChange, isAccount }) => {
  return (
    <header id="header" className="header">
      {isAccount ? (
        <Link to="/" id="back-events">
          {"< Back to events"}
        </Link>
      ) : (
        <Link to="/account" id="my-account">
          {"My account >"}
        </Link>
      )}

      <div id="tabs" className="header__tabs">
        {/* Ojo esta marrado a home */}
        {homeTabs.map((tab) => (
          <button
            data-category={tab.category}
            key={tab.category}
            onClick={onTabChange}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </header>
  );
};

export { Header };
