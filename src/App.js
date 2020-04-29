import React, { Component } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Card from './components/Card';
import './index.css';

class App extends Component {
  state = {
    paises: []
  }
  async componentDidMount() {
    const fetchResult = await fetch('https://bedu-travels-node.herokuapp.com/tours');
    const resultado = await fetchResult.json();
    this.setState({ paises: resultado.data });
  }
  render() {
    return (
      <>
        <Nav />
        <section className="text-center margin-top-lg">
          <p className="margin-bottom-sm title-font text-shadow">
            Destinos preferidos
          </p>
          <p className="margin-bottom-md subtitle-font text-shadow">
            Mira nuestros destinos favoritos alrededor del mundo
          </p>
          <div className="top-country-container">
            <section className="top-country-gridarea">
              {
                this.state.paises.map(pais => {
                  return (
                    <Card
                      imagen={pais.featuredThumbnail}
                      titulo={pais.title}
                      key={pais._id}
                    />
                  )
                })
              }
            </section>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default App;