import styled from 'styled-components';
import mediaQueries from './mediaQueries';

export default styled.div`
  font-family: Roboto, sans-serif, serif;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.15rem;
  padding-right: 1.15rem;
  width: 100%;

  ${mediaQueries.medium`
    width: 90%;
  `};

  ${mediaQueries.large`
    width: 80%;
  `};

  ${mediaQueries.extraLarge`
    width: 70rem;
  `};

  ${mediaQueries.huge`
    width: 82.5rem;
  `};
`;
