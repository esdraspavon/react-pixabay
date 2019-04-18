import React, { Component } from "react";
import Form from "./components/Form";

class App extends Component {
  state = {
    query: ""
  };

  searchInApi = () => {
    console.log("desde search api");
  };

  search = query => {
    this.setState({ query }, () => this.searchInApi());
  };

  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de imágenes</p>
          <Form search={this.search} />
        </div>
      </div>
    );
  }
}

export default App;
