import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { PrivateRoutes, PublicRoutes } from '@routes';
import { GlobalStyles } from '@styles';

const NewComponent = () => <h1>New Component</h1>;

const App = () => (
  <BrowserRouter>
    <h1>Hi it&apos;s a me mario</h1>
    <GlobalStyles />
    <Suspense fallback="...loading">
      <PrivateRoutes />
      <PublicRoutes />
    </Suspense>
    <NewComponent />
  </BrowserRouter>
);

export default App;
