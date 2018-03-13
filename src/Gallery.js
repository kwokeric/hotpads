import React, { Component } from 'react';
import './Gallery.css';
import { debounce } from './helpers/scroll.js'

const LEFT_BTN = require('./static/left-btn.png')
const RIGHT_BTN = require('./static/right-btn.png')
const DEBOUNCE_DELAY = 200;

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
    this.scrollToLeft = this.scrollToLeft.bind(this);
    this.scrollToRight = this.scrollToRight.bind(this);
    this.debouncedUpdate = debounce(() => this.update(), DEBOUNCE_DELAY);

    this.state = {
      idx: 0
    };
  }

  componentDidMount() {
    this.gallery = document.querySelector(".gallery")
    this.gallery.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    this.gallery.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {


    this.debouncedUpdate();
  }

  update() {
    // logic to check scroll pos and idx
  }

  scrollToLeft() {
    if (this.state.idx > 0) {
      this.setState({ idx: this.state.idx - 1 });
    }
  }

  scrollToRight() {
    if (this.state.idx < this.props.images.length - 1) {
      this.setState({ idx: this.state.idx + 1 });
    }
  }

  renderImages() {
    return this.props.images.map((img, idx) => (
      <div
        className="image-container"
        key={idx}
        >
        <img src={img.url} alt={img.caption}/>
        <div className="caption">{img.caption}</div>
      </div>
    ))
  }

  render() {
    let xTransform = - this.state.idx * 61;
    let galleryStyle = { transform: `translate3d(${xTransform}vw, 0px, 0px)` };

    return (
      <div className="gallery-container">
        <div className="left-btn" onClick={this.scrollToLeft}>
          <img src={LEFT_BTN} alt="left-icon" />
        </div>
        <div className="gallery">
          <div className="gallery-reel" style={galleryStyle}>
            { this.renderImages() }
          </div>
        </div>
        <div className="right-btn" onClick={this.scrollToRight}>
          <img src={RIGHT_BTN} alt="right-icon" />
        </div>

      </div>
    );
  }
}

export default Gallery;
