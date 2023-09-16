import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div>
      Hola lola!
    </div>
  );
};

const container = document.getElementById("main-gallery");
const root = createRoot(container);
root.render(<App />);