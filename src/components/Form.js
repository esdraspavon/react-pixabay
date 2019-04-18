import React, { Component } from "react";

class Form extends Component {
  queryRef = React.createRef();

  getData = e => {
    e.preventDefault();

    //Leer el valor
    const query = this.queryRef.current.value;

    this.props.search(query);
  };

  render() {
    return (
      <form onSubmit={this.getData}>
        <div className="row">
          <div className="form-group col-md-8">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Busca tu imagen, ejemplo: Futbol"
              ref={this.queryRef}
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="submit"
              className="btn btn-lg btn-danger btn-block"
              value="Buscar"
            />
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
