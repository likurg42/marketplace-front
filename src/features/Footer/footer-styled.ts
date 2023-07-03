import { styled } from 'styled-components';

export const About = styled.div`
  cursor: pointer;
`;

export const Wrapper = styled.footer`
  padding: 10px 20px;
  height: ${({ theme }) => theme.sizes.footerHeight};
  display: flex;
  justify-content: space-between;

  color: ${({ theme }) => theme.colors.white}

  background-color: ${({ theme }) => theme.colors.primary};
`;
