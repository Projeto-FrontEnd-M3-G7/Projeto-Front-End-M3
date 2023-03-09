import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { PublicRoutes } from "./pages/PublicRoutes";
import { RegisterPage } from "./pages/RegisterPage";
import { Dashboard } from "./pages/DashboardPage";
import { AdminPage } from "./pages/AdminPage";
import { ShopPage } from "./pages/ShopPage";

export const Router = () => (
  <Routes>
    <Route path="/" element={<PublicRoutes />}>
      <Route index element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/admin-page" element={<AdminPage />} />
    </Route>

    {/* <Route path='/shop' element={<ProtectedRoutes />}>
      <Route index element={<ShopPage />} />
    </Route> */}
  </Routes>
);
