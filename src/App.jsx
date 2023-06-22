import "./App.css";
import { Caracteres } from "./components/Caracteres";
import { CaracteresContextProvider} from "./context/CaracteresContext";

function App() {
  return (
    <>
      <div className="container">
        <h2 className="alert alert-success text-center">Rick and Morty</h2>

        <CaracteresContextProvider>
          <Caracteres />
        </CaracteresContextProvider>
      </div>
    </>
  );
}

export default App;
