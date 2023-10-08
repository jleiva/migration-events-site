import { Header } from "./Header";
import { MainContent } from "./MainContent";

const Account = () => {
  return (
    <>
      <Header isAccount />
      <MainContent>
        <div>Revisar localStorage y hacer render del contenido</div>
      </MainContent>
    </>
  );
};

export { Account };
