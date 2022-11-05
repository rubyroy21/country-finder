import "./App.css";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { FlagDetails } from "./components/FlagsDetails";
import { Home } from "./components/Home";
import { NotFound } from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* <Route path="/about" element={<About />}></Route> */}
        <Route path="/flags/:name" element={<FlagDetails />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
