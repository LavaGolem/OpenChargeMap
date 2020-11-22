import {ApolloClient, InMemoryCache} from '@apollo/client';

export const addressesClient = new ApolloClient({
	uri: 'http://localhost:4000/',
	cache: new InMemoryCache()
});
