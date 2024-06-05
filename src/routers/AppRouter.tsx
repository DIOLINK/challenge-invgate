import { HomePage } from '@/views/index';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ROUTES } from './routes';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.home} element={<HomePage />} />
        <Route path={ROUTES.other} element={<Navigate to={ROUTES.home} />} />
      </Routes>
    </BrowserRouter>
  );
};
