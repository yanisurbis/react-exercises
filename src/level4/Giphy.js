import React, { Component } from 'react';
import axios from 'axios'

function retrieveUrls({data}) {
  console.log(data)
  const { data: dataArr } = data
  const urls = dataArr.map(gif => gif.images.fixed_height.url)
  return urls
}

class Giphy extends Component {
  state = { 
    urls: [],
    elements: 0,
  }

  componentDidMount = () => {
    axios.get('http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC')
      .then(data => retrieveUrls(data))
      .then(urls => this.setState({ urls }))
      .then(() => axios.get())
  }

  changeNumberOfVisibleGifs = () => {
    this.setState(prevState => ({elements: prevState.elements + 1}))
  }

  render() {
    const {elements, urls} = this.state
    const urlsToRender = urls.slice(0, elements)
    return (
      <div>
        <h1>I want {elements} gif(s)</h1>
        <button onClick={this.changeNumberOfVisibleGifs}>More</button>
        {urlsToRender.map(gif => <img key={gif} src={gif} />)}
      </div>
    );
  }
}
