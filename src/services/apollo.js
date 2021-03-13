import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

/*link: createUploadLink({
    uri: "http://localhost:4000/graphql",
    credentials: "include",
  }), */
const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  credentials: "include",
  cache: new InMemoryCache(),
});

export default client;
