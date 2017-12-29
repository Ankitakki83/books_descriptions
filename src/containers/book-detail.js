import React from "react";
import { connect } from "react-redux";
import "../css/book-details.css";

class BookDetails extends React.Component {
  render() {
    if (!this.props.book) {
      return (
        <div className="Details-Head">
          <div className="Details-Text"> please select a book</div>{" "}
        </div>
      );
    }

    return (
      <div>
        <div className="Details-Head">
          {" "}
          <div className="Details-Text"> Details... </div>{" "}
        </div>
        <div className="Details">
          <div> Title: {this.props.book.title} </div>
          <div> Pages: {this.props.book.pages} </div>{" "}
          <div> Director: {this.props.book.Director} </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activebook
  };
}

export default connect(mapStateToProps)(BookDetails);
