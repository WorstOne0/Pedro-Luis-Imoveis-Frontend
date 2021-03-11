import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { ApolloProvider } from "@apollo/client";
import client from "./services/apollo";

import { Provider } from "react-redux";
import store from "./store/store";

import {
  Main,
  Login,
  RealEstate,
  Admin,
  AddPage,
  Details,
  Contact,
  EditPage,
  Config,
} from "./pages";

export default class Routes extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <BrowserRouter>
            <Route path="/" exact component={Main} />
            <Route path="/realestate" component={RealEstate} />
            <Route path="/details/:id" component={Details} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/admin" exact component={Admin} />
            <Route path="/admin/add" component={AddPage} />
            <Route path="/admin/edit/:id" component={EditPage} />
            <Route path="/admin/config" exact component={Config} />
          </BrowserRouter>
        </Provider>
      </ApolloProvider>
    );
  }
}
