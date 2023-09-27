import { useState } from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./components/react/Header";
import { MainContent } from "./components/react/MainContent";
import fetchEventsByCategories from "./services/api";

const App = () => {
  const [categoryData, setCategoryData] = useState([]);

  const onTabChange = (e) => {
    const category = e.target.dataset.category;

    fetchEventsByCategories(category).then((data) => setCategoryData(data));
  };

  return (
    <>
      <Header onTabChange={onTabChange} />
      <MainContent categoryData={categoryData} />
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
