import { Route, Routes } from "react-router";
import axios from "axios";
import HomeLayout from "./Layout/Home.Layout";
// import Home from "./Pages/home";
import Pokedex from "./Pages/pokedex";

//axios default settings
axios.defaults.baseURL = "https://pokeapi.co/api/v2/pokemon";
axios.defaults.params = {};
function App() {
  return (
    <>
      <Routes>
        <Route element={<HomeLayout />}>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Pokedex />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
