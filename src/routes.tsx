import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PublicRoutes } from './pages/PublicRoutes';
import { RegisterPage } from './pages/RegisterPage';
import { Dashboard } from './pages/DashboardPage';

export const Router = () => (
    <Routes>
        <Route path="/" element={<PublicRoutes />}>
            <Route index element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        {/* <Route path='/shop' element={<ProtectedRoutes />}>
      <Route index element={<ShopPage />} />
    </Route> */}
    </Routes>
);
