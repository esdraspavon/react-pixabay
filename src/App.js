import React, { Component } from "react";
import Form from "./components/Form";

class App extends Component {
  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de imágenes</p>
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
