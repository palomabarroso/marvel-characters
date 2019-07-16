import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import MarvelCard from './components/MarvelCard'

const md5 = require('md5');
const publicKey = '6fd273d42d1cc83dcac6d6d39deff6c8';
const privateKey = 'e7cd56640d3c01337510c1c682b5a394c967512c';
const timeStamp = Date.now().toString();
const hash = md5(timeStamp + privateKey + publicKey);
const url = (`http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`);

class App extends Component {
  state = {
    heroes: []
  }
  async componentDidMount() {
    const result = await axios.get(url)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return error;
      })
    const heroes = result.data.results;
    this.setState({
      heroes
    })
    console.log(heroes)
  }

  render() {
    return (
      <div className="Card">
        <h1 className="titulo">
          Marvel Heroes
        </h1>
        {this.state.heroes.map((hero) => (
          <MarvelCard
            hero={hero}
          />
        ))}
      </div>
    );
  }
}

export default App;
