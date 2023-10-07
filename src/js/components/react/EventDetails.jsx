import { useParams } from "react-router-dom";
import { Header } from "./Header";
import { MainContent } from "./MainContent";

const EventDetails = () => {
  const { id } = useParams();

  return (
    <>
      <Header />
      <MainContent>
        <h1>{`Event ${id}`}</h1>
      </MainContent>
    </>
  );
};

export default EventDetails;
