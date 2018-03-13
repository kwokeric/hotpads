import React, { Component } from 'react';

import './App.css';
import Gallery from './Gallery.js';
import { LANDSCAPES, DOGS } from './static/photos.js'

class App extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      photos: {
        landscapes: LANDSCAPES,
        dogs: DOGS
      },
      active: "landscapes",
      inactive: "dogs"
    }
  }

  handleClick() {
    this.setState({
      active: this.state.inactive,
      inactive: this.state.active
    })
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="title">{`Photo gallery: ${this.state.active}`}</h1>
          Click on arrow buttons or swipe photos to see more.
        </header>
        <Gallery
          images={(this.state.photos[this.state.active]).filter(el => el.url && el.caption)}
          title={this.state.active}
          />
        <div className="footer-container">
          <div className="footer" onClick={this.handleClick}>
            Want to see <span> {this.state.inactive} </span> instead?
          </div>
        </div>
      </div>
    );
  }
}

export default App;
