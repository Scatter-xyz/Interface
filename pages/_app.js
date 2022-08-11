import '../styles/globals.css'

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/cpp-phoenix/scatter/",
  cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} /> 
    </ApolloProvider>
  );
}

export default MyApp;
