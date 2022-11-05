import "./App.css";
import { Stocks } from "./components/Stocks";
import { Route, Routes } from "react-router-dom";
import { Quotes } from "./components/Quotes";
import { Home } from "./components/Home";
import { NotFound } from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <Stocks />
      <Routes>
        {/* <Route path="/about" element={<About />}></Route> */}
        <Route path="/quotes/:symbol" element={<Quotes />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
