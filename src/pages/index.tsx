import * as React from 'react';
import styled from 'styled-components';

const Container = styled.main`
  font-family: Roboto, sans-serif, serif;
  padding: 96px;
`;

const H1 = styled.h1`
  margin-top: 0;
`;

const IndexPage = () => {
  return (
    <Container>
      <title>Home Page</title>
      <H1>Duncan De Vlaminck</H1>
    </Container>
  );
};

export default IndexPage;
