import React, { Component } from 'react';
import './Gallery.css';
import { throttle } from './helpers/scroll.js'

const LEFT_BTN = require('./static/left-btn.png')
const RIGHT_BTN = require('./static/right-btn.png')
const THROTTLE_DELAY = 200;

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.endSwipe = this.endSwipe.bind(this);
    this.scrollToLeft = this.scrollToLeft.bind(this);
    this.scrollToRight = this.scrollToRight.bind(this);
    this.throttledScrollToLeft = throttle(this.scrollToLeft, THROTTLE_DELAY);
    this.throttledScrollToRight = throttle(this.scrollToRight, THROTTLE_DELAY);

    this.state = {
      idx: 0,
      isSwiping: false,
      xTransform: 0,
      xPos: 0,
      xStart: 0
    };
  }

  handleMouseDown(e) {
    this.setState({ isSwiping: true })
    let xStart = e.clientX;
    this.setState({ xStart });
  }

  handleMouseMove(e) {
    if (!this.state.isSwiping) return

    // mouse position in pixels
    let xEnd = e.clientX;
    // change mouse pos if within range
    let xDragDistance = xEnd - this.state.xStart, xTransform = 0
    let maxXTransform = - (this.props.images.length - 1 ) * window.innerWidth * 0.6;

    if (this.state.xPos + xDragDistance > 0) {
      xTransform = 0 - this.state.xPos;
    } else if (this.state.xPos + xDragDistance < maxXTransform) {
      xTransform = maxXTransform - this.state.xPos;
    } else {
      xTransform = xDragDistance;
    }

    this.setState({ xTransform });
  }

  handleMouseUp() {
    if (!this.state.isSwiping) return
    this.endSwipe();
  }

  handleMouseOut() {
    if (!this.state.isSwiping) return
    this.endSwipe();
  }

  endSwipe() {
    let xPos = this.state.xPos + this.state.xTransform, idx = this.state.idx;
    let halfWidth = Math.floor(window.innerWidth * 0.6 / 2);

    // check if the container has been scrolled past halfway
    // debugger
    if (this.state.xTransform < 0 &&
      xPos + (this.state.idx * window.innerWidth * 0.6) < -halfWidth) {
      idx = this.state.idx + 1;
    } else if (this.state.xTransform > 0 &&
      xPos + (this.state.idx * window.innerWidth * 0.6) > halfWidth) {
      idx = this.state.idx - 1;
    }

    this.setState({
      isSwiping: false,
      idx,
      xPos,
      xStart: 0,
      xTransform: 0
    }, this.updatePosition);
  }

  updatePosition() {
    this.setState({ xPos: -this.state.idx * window.innerWidth * 0.61 })
  }

  scrollToLeft() {
    if (this.state.idx > 0) {
      let newIdx = this.state.idx - 1
      this.setState({
        idx: newIdx,
        xPos: - newIdx * window.innerWidth * 0.61
      });
    }
  }

  scrollToRight() {
    if (this.state.idx < this.props.images.length - 1) {
      let newIdx = this.state.idx + 1
      this.setState({
        idx: newIdx,
        xPos: - newIdx * window.innerWidth * 0.61
      });
    }
  }

  renderImages() {
    return this.props.images.map((img, idx) => (
      <div
        className="image-container"
        key={idx}
        >
        <img src={img.url} alt={img.caption} draggable="false" />
        <div className="caption">{img.caption}</div>
      </div>
    ))
  }

  render() {
    let xTransform = (this.state.xPos + this.state.xTransform) * 100 / window.innerWidth;
    let galleryStyle = {
      transform: `translate3d(${xTransform}vw, 0px, 0px)`,
      transition: this.state.isSwiping ? "none" : "250ms ease-in-out"
    };

    return (
      <div className="gallery-container">
        <div className="left-btn" onClick={this.throttledScrollToLeft}>
          <img src={LEFT_BTN} alt="left-icon" />
        </div>
        <div className="gallery" onMouseOut={this.handleMouseUp}>
          <div
            className="gallery-reel"
            onMouseDown={this.handleMouseDown}
            onMouseMove={this.handleMouseMove}
            onMouseUp={this.handleMouseUp}
            style={galleryStyle}>
            { this.renderImages() }
          </div>
        </div>
        <div className="right-btn" onClick={this.throttledScrollToRight}>
          <img src={RIGHT_BTN} alt="right-icon" />
        </div>

      </div>
    );
  }
}

export default Gallery;
