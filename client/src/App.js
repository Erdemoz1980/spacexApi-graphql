import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
import logoPng from './images/spacex.png';
import RocketList from './components/RocketList';


const App = () => {
  const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
    <div>
         <img src={logoPng} alt='spacex' />
        <h1>SpaceX API</h1>
        <RocketList />
      </div>
      </ApolloProvider>
  )
}

export default App
