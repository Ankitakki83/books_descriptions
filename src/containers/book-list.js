import React from "react";
import { connect } from "react-redux";
// import { createStore } from "redux";
import "../css/book-List.css";
import selectBook from "../actions/index";
import { bindActionCreators } from "redux";

class BookList extends React.Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <div className="Book-List">
          <div className="Book-Title">
            {" "}
            <li key={book.title} onClick={() => this.props.selectBook(book)}>
              {book.title}
            </li>{" "}
          </div>{" "}
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderList()}</div>;
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
