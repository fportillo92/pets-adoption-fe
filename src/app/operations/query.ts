import gql from 'graphql-tag';

export const listPublications = gql`
query listPublications {
    petPublications {
      id
      type
      name
      age
      size
      sex
      health
      description
      state
    }
  }`;
