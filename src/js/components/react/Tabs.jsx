import { useState } from "react";
import fetchEventsByCategories from "../../services/api";
import { EventCard } from "./EventCard";

// Refactor.
// El componente esta "amarrado", como podemos hacer que sea flexible? que acepte diferente tipo de contenido
// y que el diseño no dependa solo de clases de header.
// Algunas ideas:
// - se puede usar algun mejor nombre para los metodos y variables?
// - idealmente Tabs debe ser solo un contenedor, para que se pueda reusar
// - se puede hacer un split del componente? una sección con los botones y otra con el contenido?
// - un prop para recibir la clase?

const Tabs = ({ categories }) => {
  const [categoryData, setCategoryData] = useState([]);

  const onTabChange = (e) => {
    const category = e.target.dataset.category;

    fetchEventsByCategories(category).then((data) => setCategoryData(data));
  };

  return (
    <>
      <div id="tabs" className="header__tabs">
        {categories.map(({ category, label }) => {
          return (
            <button
              data-category={category}
              key={category}
              type="button"
              onClick={onTabChange}
            >
              {label}
            </button>
          );
        })}
      </div>
      <div>
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
      </div>
    </>
  );
};

export default Tabs;
