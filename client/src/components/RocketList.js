import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ROCKETS } from '../queries/queries';

const RocketList = () => {
  const { loading, error, data } = useQuery(QUERY_ROCKETS);


  return (
    <div>
      {
        loading ? <h2>Loading...</h2> : error ? console.log(error) :
          console.log(data)
      }
      
    </div>
  )
}

export default RocketList
