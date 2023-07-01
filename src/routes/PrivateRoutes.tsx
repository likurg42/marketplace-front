import { lazy } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import { checkPathMatch, paths } from '@routes/routes-helpers.ts';

const AccountSettingsPage = lazy(() => import('@pages/AccountSettingsPage'));

const PrivateRoutes = () => {
  const location = useLocation();

  const isMatch = checkPathMatch(location.pathname, paths);

  return (
    <Routes>
      <Route element={<AccountSettingsPage />} path={paths.accountsSettings} />
      <Route
        element={!isMatch ? <Navigate to={paths.home} /> : null}
        path="*"
      />
    </Routes>
  );
};

export default PrivateRoutes;
