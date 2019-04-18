import React, { Component } from "react";
import Form from "./components/Form";
import Results from "./components/Results";

class App extends Component {
  state = {
    query: "",
    images: []
  };

  searchInApi = () => {
    const query = this.state.query;
    const url = `https://pixabay.com/api/?key=12237588-9f208471315796a0faf6a5ada&q=${query}`;

    fetch(url)
      .then(resp => resp.json())
      .then(data => this.setState({ images: data.hits }));
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
        <div className="row justify-content-center">
          <Results images={this.state.images} />
        </div>
      </div>
    );
  }
}

export default App;
