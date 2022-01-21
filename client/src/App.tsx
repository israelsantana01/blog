import { ApolloProvider } from '@apollo/client';
import Home from './pages/home';
import client from './services/graphql/client';

function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}

export default App;
