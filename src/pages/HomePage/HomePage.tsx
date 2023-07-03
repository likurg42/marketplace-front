import { Helmet } from 'react-helmet-async';

import useSWR from 'swr';

import Container from '@components/Container';
import * as S from '@pages/HomePage/styled-home-page';
import { Product } from '@project-types/product';
import fetcher from '@utils/fetcher';

const HomePage = () => {
  const { data } = useSWR<Product[]>(
    'https://fakestoreapi.com/products?limit=5',
    fetcher
  );

  return (
    <>
      <Helmet>
        <title>Главная - маркетплейс</title>
      </Helmet>
      <Container breakpoint="xl">
        <S.Wrapper>
          <S.ProductGroupHeader>Рекомендуемые товары</S.ProductGroupHeader>
          <S.ProductGroup>
            {data &&
              data.map(({ id, title }) => (
                <S.ProductGroupItem key={id}>{title}</S.ProductGroupItem>
              ))}
          </S.ProductGroup>
        </S.Wrapper>
      </Container>
    </>
  );
};
export default HomePage;
