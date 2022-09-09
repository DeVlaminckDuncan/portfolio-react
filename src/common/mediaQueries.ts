import { css } from 'styled-components';

const mediaQuery = (size: string) => {
  return (...args: any) => css`
    @media (min-width: ${size}) {
      ${css(...args)}
    }
  `;
};

export default {
  small: mediaQuery('30rem'),
  medium: mediaQuery('48rem'),
  large: mediaQuery('62rem'),
  extraLarge: mediaQuery('76.375rem'),
  huge: mediaQuery('118.75rem'),
  enormous: mediaQuery('200rem'),
};
