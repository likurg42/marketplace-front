import { styled } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  padding: 0.875rem 1.25rem;
  height: ${({ theme }) => theme.sizes.headerHeight};
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  transition: margin 0.2s ease-out;
  z-index: ${({ theme }) => theme.order.level5};
`;

export default Wrapper;
