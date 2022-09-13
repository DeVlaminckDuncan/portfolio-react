import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import Container from '../common/container';

const IndexPage = () => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `,
  );

  return (
    <Container>
      <title>{title}</title>
      <h1>{title}</h1>
    </Container>
  );
};

export default IndexPage;
