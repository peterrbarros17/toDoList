import { AppContext } from "contents";
import DetailsPage from "pages/DetailsPage";
import HomePage from "pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <AppContext>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/:taskTitle" element={<DetailsPage />} />
        </Routes>
      </AppContext>
    </BrowserRouter>
  );
}
