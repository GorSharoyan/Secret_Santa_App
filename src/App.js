import "./App.css";

//routes
import SwitchRouter from "./Components/Routes/SwitchRouter";

//pages
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <SwitchRouter />
    </div>
  );
}

export default App;
