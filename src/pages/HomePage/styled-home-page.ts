import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: block;

  * + * {
    margin-top: 20px;
  }
`;

export const ProductGroupItem = styled.div``;

export const ProductGroupHeader = styled.h2``;

export const ProductGroup = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${ProductGroupHeader} {
    flex: 1;
    width: 100%;
  }

  ${ProductGroupItem} {
    width: 16.66666%;
    margin-bottom: 20px;
  }
`;
