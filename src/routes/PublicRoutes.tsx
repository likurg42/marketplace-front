import { lazy } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import { checkPathMatch, paths } from '@routes/routes-helpers';

const HomePage = lazy(() => import('@pages/HomePage'));

const PublicRoutes = () => {
  const location = useLocation();

  const isMatch = checkPathMatch(location.pathname, paths);

  return (
    <Routes>
      <Route element={<HomePage />} path={paths.home} />
      <Route
        element={!isMatch ? <Navigate to={paths.home} /> : null}
        path="*"
      />
    </Routes>
  );
};

export default PublicRoutes;
