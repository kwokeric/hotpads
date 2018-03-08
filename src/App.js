import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: PHOTOS
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">This is a photo gallery</h1>
        </header>
      </div>
    );
  }
}

const PHOTOS = [
  {
    url: "https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Natural-Dog-Law-2-To-dogs%2C-energy-is-everything.jpg?itok=Z-ujUOUr",
    caption: "Bear likes his invible frisbee"
  },
  {
    url: "http://a57.foxnews.com/images.foxnews.com/content/fox-news/lifestyle/2017/12/01/dog-who-attempted-to-escape-shelter-in-viral-video-gets-adopted/_jcr_content/par/featured_image/media-0.img.jpg/931/524/1512148563312.jpg?ve=1&tl=1&text=big-top-image",
    caption: "Silly Boxer leaves his tongue out"
  },
  {
    url: "https://i2.wp.com/www.totallygoldens.com/wp-content/uploads/2014/10/Golden-retriever-puppy-barking-final.jpg?resize=620%2C330&ssl=1",
    caption: "Bork bork"
  },
  {
    url: "https://dawggonegood.files.wordpress.com/2012/01/playingfetch.jpg",
    caption: "Four. Four tennis balls"
  },
  {
    url: "https://i.ytimg.com/vi/e3xs20KPjVE/maxresdefault.jpg",
    caption: "Roxy is very confused"
  },
  {
    url: "https://i.ytimg.com/vi/yJiVZUKAS84/maxresdefault.jpg",
    caption: "Somebody tooted!"
  },
  {
    url: "https://www.los-pollos.com/wp-content/uploads/2015/02/funny-dog-face-1.jpg",
    caption: "A Los Pollos Hermanos chicken nugget!"
  },
];

export default App;
