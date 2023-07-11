import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import DropdownMenu from "./components/DropdownMenu";
import WeatherDisplay from "./components/WeatherDisplay";

function App() {
  const [area, setArea] = useState("");

  return (
    <>
      <Routes>
        <Route path="/" element={<DropdownMenu setArea={setArea} />} />
        <Route path="/weather" element={<WeatherDisplay area={area} />} />
      </Routes>
    </>
  );
}

export default App;
