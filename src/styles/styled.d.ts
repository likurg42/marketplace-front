import { Theme } from '@styles/themes/base-theme';

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
