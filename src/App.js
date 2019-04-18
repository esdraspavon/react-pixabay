import React, { Component } from "react";
import Form from "./components/Form";
import Results from "./components/Results";
import Spinner from "./components/Spinner";

class App extends Component {
  state = {
    query: "",
    images: [],
    page: "",
    loading: false,
    totalPages: ""
  };

  searchInApi = async () => {
    const query = this.state.query;
    const page = this.state.page;
    const url = `https://pixabay.com/api/?key=12237588-9f208471315796a0faf6a5ada&q=${query}&page=${page}`;

    this.setState({ loading: true });
    await fetch(url)
      .then(resp => {
        return resp.json();
      })
      .then(data =>
        this.setState({
          images: data.hits,
          loading: false,
          totalPages: Math.ceil(data.totalHits / 30)
        })
      );
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
    this.setState({ page }, () => {
      this.searchInApi();
      this.scroll();
    });
  };
  nextPage = () => {
    //leemos el state
    let page = this.state.page;
    let totalPages = this.state.totalPages;
    //sujmar a la pagina
    //si es la pagina 1 no podemos retroceder
    if (page === totalPages) return null;
    page++;
    //agregar al state
    this.setState({ page }, () => {
      this.searchInApi();
      this.scroll();
    });
  };

  scroll = () => {
    const elem = document.querySelector(".jumbotron");
    elem.scrollIntoView("smooth", "start");
  };

  render() {
    const loading = this.state.loading;
    let resultado;
    if (loading) {
      resultado = <Spinner />;
    } else {
      resultado = (
        <Results
          images={this.state.images}
          previousPage={this.previousPage}
          nextPage={this.nextPage}
          page={this.state.page}
          totalPages={this.state.totalPages}
        />
      );
    }

    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de imágenes</p>
          <Form search={this.search} />
        </div>
        <div className="row justify-content-center">{resultado}</div>
      </div>
    );
  }
}

export default App;
