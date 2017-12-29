import React from "react";
import BookList from "./containers/book-list";
import BookDetail from "./containers/book-detail";
import Header from "./header.js";
import "./App.css";
// import { createStore } from "redux";
// import { Component } from "redux";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <div className="BodyContent">
          <div className="MovieList">
            {" "}
            <BookList />{" "}
          </div>

          <div className="MovieDetails">
            {" "}
            <BookDetail />{" "}
          </div>
        </div>
      </div>
    );
  }
}
