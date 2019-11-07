import gql from "graphql-tag";

export default {
  FETCH_GODS: gql`
    query FetchGods {
      gods {
        id
        name
        description
      }
    }
  `,

  FETCH_ABODES: gql`
    query FetchAbodes {
      abodes {
        id
        name
      }
    }
  `,

  FETCH_ABODE: gql`
    query FetchAbode($abodeId: ID!) {
      abode(id: $abodeId) {
        id,
        name,
        coordinates
      }
    }
  `,

  FETCH_EMBLEMS: gql`
    query FetchEmblems {
      emblems {
        id
        name
      }
    }
  `,

  FETCH_GOD: gql`
    query FetchGod($godId: ID!) {
      god(id: $godId) {
        id,
        name,
        type, 
        description,
        domains,
        abode{
          id,
          name
        },
        emblems{
          id,
          name
        },
        parents{
          id,
          name
        },
        children{
          id,
          name
        },
        siblings{
          id,
          name
        },
        
      }
    }
  `,
  

  FETCH_PARENTS: gql`
    query FetchParents($godId: ID!) {
      god(id: $godId) {
        parents {
          id
          name
        }
      }
    }
  `,

  FETCH_SIBLINGS: gql`
    query FetchSiblings($godId: ID!){
       god(id: $godId) {
        siblings {
          id
          name
        }
      }
    }

  `,

  FETCH_CHILDREN: gql`
    query FetchChildren($godId: ID!) {
      god(id: $godId) {
        children {
          id
          name
        }
      }
    }
  `
};