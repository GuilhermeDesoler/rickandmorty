import { gql } from "@apollo/client";

export const getAllCharacters = gql`
  {
    characters {
      results {
        id
        name
        image
        status
        species
        location {
          name
        }
      }
    }
  }
`;
