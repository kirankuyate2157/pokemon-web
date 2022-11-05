import { Route, Routes } from "react-router";

import HomeLayout from "./Layout/Home.Layout";
import Home from "./Pages/home";
function App() {
  return (
    <>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
