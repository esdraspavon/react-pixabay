import React from "react";

const Pagination = () => {
  return (
    <div className="py-5">
      <button type="button" className="btn btn-info mr-1">
        Anterior &larr;
      </button>
      <button type="button" className="btn btn-info mr-1">
        Siguiente &rarr;
      </button>
    </div>
  );
};

export default Pagination;
