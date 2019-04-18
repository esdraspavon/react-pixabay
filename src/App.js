import React, { Component } from "react";
import Form from "./components/Form";
import Results from "./components/Results";

class App extends Component {
  state = {
    query: "",
    images: [],
    page: ""
  };

  searchInApi = () => {
    const query = this.state.query;
    const page = this.state.page;
    const url = `https://pixabay.com/api/?key=12237588-9f208471315796a0faf6a5ada&q=${query}&page=${page}`;

    fetch(url)
      .then(resp => resp.json())
      .then(data => this.setState({ images: data.hits }));
  };

  search = query => {
    this.setState({ query, page: 1 }, () => this.searchInApi());
  };

  previousPage = () => {
    //leemos el state
    let page = this.state.page;
    //si es la pagina 1 no podemos retroceder
    if (page === 1) return null;
    //restar a la pagina actual
    page--;
    //agregar al state
    this.setState({ page });
  };
  nextPage = () => {
    //leemos el state
    let page = this.state.page;
    //sujmar a la pagina actual
    page++;
    //agregar al state
    this.setState({ page });
  };

  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de imágenes</p>
          <Form search={this.search} />
        </div>
        <div className="row justify-content-center">
          <Results
            images={this.state.images}
            previousPage={this.previousPage}
            nextPage={this.nextPage}
          />
        </div>
      </div>
    );
  }
}

export default App;
