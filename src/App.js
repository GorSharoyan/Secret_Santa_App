import "./App.css";

//components
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

//routes
import SwitchRouter from "./Components/Routes/SwitchRouter";

function App() {
  return (
    <div className="App">
      <Header />
        <SwitchRouter />
      <Footer />
    </div>
  );
}

export default App;
