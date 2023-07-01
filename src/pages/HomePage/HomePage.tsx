import { Helmet } from 'react-helmet-async';

import TestDiv from '@pages/HomePage/styled.ts';

const HomePage = () => (
  <>
    <Helmet>
      <title>Главная - маркетплейс</title>
    </Helmet>
    <TestDiv>
      <h1>Главная - маркетплейс</h1>
    </TestDiv>
  </>
);

export default HomePage;
