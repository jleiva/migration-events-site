import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Account } from "./components/react/Account";
import Home from "./components/react/Home";
import EventDetails from "./components/react/EventDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/account" element={<Account />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
