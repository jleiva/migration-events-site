import { homeTabs } from "../../config";

const Header = ({ onTabChange }) => {
  return (
    <header id="header" className="header">
      <a href="./account.html" id="my-account">
        {"My account >"}
      </a>
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
