import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import CataloguePage from "../../pages/CataloguePage/CataloguePage";
import FavoritePage from "../../pages/FavoritePage/FavoritePage";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import SharedLayout from "../SharedLayout/SharedLayout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalogue" element={<CataloguePage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
