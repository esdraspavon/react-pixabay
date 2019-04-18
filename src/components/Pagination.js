import React, { Component } from "react";

class Pagination extends Component {
  showPreviousButton = () => {
    const { page } = this.props;
    if (page === 1) return null;
    return (
      <button
        onClick={this.props.previousPage}
        type="button"
        className="btn btn-info mr-1"
      >
        Anterior &larr;
      </button>
    );
  };

  showNextButton = () => {
    const { page, totalPages } = this.props;
    if (page === totalPages) return null;
    return (
      <button
        onClick={this.props.nextPage}
        type="button"
        className="btn btn-info mr-1"
      >
        Siguiente &rarr;
      </button>
    );
  };

  render() {
    return (
      <div className="py-5">
        {this.showPreviousButton()}
        {this.showNextButton()}
      </div>
    );
  }
}

export default Pagination;
