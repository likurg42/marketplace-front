import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import Footer from '@features/Footer';
import Header from '@features/Header';
import { PrivateRoutes, PublicRoutes } from '@routes';
import { BaseTheme, GlobalStyles } from '@styles';
import PageWrapper from '@styles/app-styled.ts';

const App = () => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={BaseTheme}>
      <BrowserRouter>
        <PageWrapper>
          <Header />
          <Suspense fallback="...loading">
            <PrivateRoutes />
            <PublicRoutes />
          </Suspense>
          <Footer />
        </PageWrapper>
      </BrowserRouter>
    </ThemeProvider>
  </>
);

export default App;
