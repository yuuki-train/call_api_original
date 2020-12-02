import React, { Component } from 'react';
import fetch from 'node-fetch';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      color: '',
      start: '',
      finish: ''
    }
  }
  componentWillMount () {
    const URL = 'http://localhost:8080/api/original/getOsakaMetroLine'
    fetch(URL, {mode: 'cors'})
    .then(res => res.json())
    .then(json => {
      this.setState({
        name: json['name'],
        color: json['color'],
        start: json['start'],
        finish: json['finish']
      })
    });
  }

  render() {
    return <div className='App'>
      name: {this.state.name} <br />
      color: {this.state.color} <br />
      start: {this.state.start} <br />
      finish: {this.state.finish} <br />
    </div>
  }
}

export default App;