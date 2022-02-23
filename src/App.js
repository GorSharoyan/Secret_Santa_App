import "./App.css";

//components
import Footer from "./Components/Footer/Footer";

//routes
import SwitchRouter from "./Components/Routes/SwitchRouter";

function App() {
  return (
    <div className="App">
      <SwitchRouter />
      <Footer />
    </div>
  );
}

export default App;
