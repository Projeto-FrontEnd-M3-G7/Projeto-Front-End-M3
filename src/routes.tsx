import { Route, Routes } from "react-router-dom";
import { AdminPage } from "./pages/AdminPage";
import { HomePage } from "./pages/HomePage";
import { PublicRoutes } from "./pages/PublicRoutes";
import { RegisterPage } from "./pages/RegisterPage";

export const Router = () => (
  <Routes>
    <Route path="/" element={<PublicRoutes />}>
      <Route index element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/admin-page" element={<AdminPage />} />
    </Route>

    {/* <Route path='/shop' element={<ProtectedRoutes />}>
      <Route index element={<ShopPage />} />
    </Route> */}
  </Routes>
);
