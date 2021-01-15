import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { ApolloProvider } from "@apollo/client";
import client from "./services/apollo";

import { Provider } from "react-redux";
import store from "./store/store";

import { Main } from "./pages";

export default class Routes extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <BrowserRouter>
            <Route path="/" exact component={Main} />
          </BrowserRouter>
        </Provider>
      </ApolloProvider>
    );
  }
}
