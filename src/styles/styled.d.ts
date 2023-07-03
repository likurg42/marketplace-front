import { Theme } from '@styles/themes/base-theme.ts';

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
