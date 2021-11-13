import {
  gql
} from '@apollo/client';

const QUERY_ROCKETS = gql`
{
  rockets{
    id, name, active, flickr_images
  }
}
`;

const QUERY_LAUNCHES = gql`
{
  launches {
    id, name, date_local, success, crew{
      crew, role
    }
    }
  
}
`;

export { QUERY_LAUNCHES, QUERY_ROCKETS };