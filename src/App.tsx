import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import Footer from '@features/Footer';
import Header from '@features/Header';
import { PrivateRoutes, PublicRoutes } from '@routes';
import { BaseTheme, GlobalStyled } from '@styles';
import FullHeightWrapper from '@styles/app-styled';

const App = () => (
  <>
    <GlobalStyled />
    <ThemeProvider theme={BaseTheme}>
      <BrowserRouter>
        <FullHeightWrapper>
          <Header />
          <Suspense fallback="...loading">
            <PrivateRoutes />
            <PublicRoutes />
          </Suspense>
          <Footer />
        </FullHeightWrapper>
      </BrowserRouter>
    </ThemeProvider>
  </>
);

export default App;
