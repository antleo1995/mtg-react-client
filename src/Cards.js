import React, { Component } from 'react';
import './App.css';
import Card from './Cards.js'

class Cards extends Component {
// /mtg/cards?set=UNH&color=red&color=blue&rarity=rare
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      color: ''
  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.render = this.render.bind(this);
  }

  handleChange(event) {
    this.setState({color: event.target.value});
  }

  handleSubmit(event) {

    let base = this;
     fetch('https://api.deckbrew.com/mtg/cards?color=' + this.state.color)
      .then(function(response) {
        return response.json()
      }).then(function(json) {
        console.log('Parsed JSON', json)
        // update state
        base.setState({
          cards: json
        });
        console.log('Inside handleSubmit function: ', base.state.cards)
      }).catch(function(ex) {
        console.log('Parsing JSON failed', ex)
        alert('Err! ' + ex);
      });

    event.preventDefault();
  }

  render() {
    // let cards = {this.state.cards.map( (card, index) => (
    //     <Card name={card.name} key={index} />
    // ))};
    console.log('Inside render: ', this.state.cards)
    return (
      <div className="home">
      <form onSubmit={this.handleSubmit}>
        <p>
        </p>
        <label>
          Please pick a color:
          <input type="text" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Get some cards!" />
      </form>
      <ul>
  {this.state.cards.map((card, index) => (
    <Card cardname={card.name} key={index} />
  ))}
</ul>
</div>
    );
  }
}

export default Cards;
