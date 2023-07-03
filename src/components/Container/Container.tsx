import { styled } from 'styled-components';

import type { BreakpointsValues } from '@styles';

const Container = styled.div<{ breakpoint?: BreakpointsValues }>`
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 15px;

  @media screen and ${({ breakpoint, theme }) =>
      theme.media[breakpoint ?? 'xxl']} {
    max-width: ${({ breakpoint, theme }) =>
      theme.breakpoints[breakpoint ?? 'xxl']};
  }
`;

export default Container;
