import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Container = styled.main`
  font-family: Roboto, sans-serif, serif;
  padding: 96px;
`;

const H1 = styled.h1`
  margin-top: 0;
`;
const Message = styled.p`
  margin-bottom: 48px;
`;

const NotFoundPage = () => {
  return (
    <Container>
      <title>Not found</title>
      <H1>Page not found</H1>
      <Message>
        Sorry{' '}
        <span aria-label="Pensive emoji" role="img">
          😔
        </span>{' '}
        we couldn&apos;t find what you were looking for.
        <br />
        <br />
        <Link to="/">Go home</Link>.
      </Message>
    </Container>
  );
};

export default NotFoundPage;
