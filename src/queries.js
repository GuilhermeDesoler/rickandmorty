import { gql } from "@apollo/client";

export const getAllCharacters = gql`
  query Character($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
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
