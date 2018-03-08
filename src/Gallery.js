import React, { Component } from 'react';
import './Gallery.css';

const LEFT_BTN = require('./static/left-btn.png')
const RIGHT_BTN = require('./static/right-btn.png')

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      idx: 0
    }
  }

  renderImages() {
    return this.props.images.map((img, idx) => (
      <div
        className="image-container"
        key={idx}
        >
        <img src={img.url} alt={`${img.caption}`}/>
      </div>
    ))
  }

  render() {
    let galleryStyle = { transform: this.state.idx * 400 };

    return (
      <div className="gallery-container">
        <div className="left-btn" onClick={this.scrollToLeft}>
          <img src={LEFT_BTN} alt="left-icon" />
        </div>
        <div className="gallery" style={galleryStyle}>
          { this.renderImages() }
        </div>
        <div className="right-btn" onClick={this.scrollToRight}>
          <img src={RIGHT_BTN} alt="right-icon" />
        </div>

      </div>
    );
  }
}

export default Gallery;
