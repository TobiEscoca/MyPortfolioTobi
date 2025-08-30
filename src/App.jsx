import "./App.css";
import Header from "./UI/header";
import Presentation from "./UI/presentation";

const App = () => {
  return (
    <div>
      <article className="fs-part">
        <Header />
        <Presentation />
      </article>
    </div>
  );
};

export default App;
