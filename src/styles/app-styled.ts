import { styled } from 'styled-components';

const FullHeightWrapper = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-rows: auto 1fr auto;
`;

export default FullHeightWrapper;
