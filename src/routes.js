import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { ApolloProvider } from "@apollo/client";
import client from "./services/apollo";

import { Provider } from "react-redux";
import store from "./store/store";

import { Main, Login, RealEstate, Admin, AddPage } from "./pages";

export default class Routes extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <BrowserRouter>
            <Route path="/" exact component={Main} />
            <Route path="/realestate" component={RealEstate} />
            <Route path="/login" component={Login} />
            <Route path="/admin" exact component={Admin} />
            <Route path="/admin/add" component={AddPage} />
          </BrowserRouter>
        </Provider>
      </ApolloProvider>
    );
  }
}
