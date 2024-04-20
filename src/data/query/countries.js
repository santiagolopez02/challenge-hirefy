import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query Get_countries {
    countries {
      name
      code
      emojiU
      emoji
      currency
      native
      phone
      continent {
        name
      }
      languages {
        name
        native
        rtl
      }
      states {
        name
      }
    }
  }
`;
