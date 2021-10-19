import React, { useEffect } from 'react';
import { ApolloProvider } from '@apollo/client';
import Router from './Router';
import { client } from './apollo/client';
const { Kakao }: any = window;
function App() {
  useEffect(() => {
    Kakao.init('a31b5c49422e1fe862f438fa5645de92');
  }, []);
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
}
export default App;
