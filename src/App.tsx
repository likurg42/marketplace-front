import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import PrivateRoutes from '@routes/PrivateRoutes';
import PublicRoutes from '@routes/PublicRoutes';

const App = () => (
  <BrowserRouter>
    <Suspense fallback="...loading">
      <PrivateRoutes />
      <PublicRoutes />
    </Suspense>
  </BrowserRouter>
);

export default App;
