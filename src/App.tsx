import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import { PrivateRoutes, PublicRoutes } from '@routes';
import { BaseTheme, GlobalStyles } from '@styles';

const NewComponent = () => <h1>New Component</h1>;

const App = () => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={BaseTheme}>
      <BrowserRouter>
        <Suspense fallback="...loading">
          <PrivateRoutes />
          <PublicRoutes />
        </Suspense>
        <NewComponent />
      </BrowserRouter>
    </ThemeProvider>
  </>
);

export default App;
