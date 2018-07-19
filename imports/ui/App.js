import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor'; 
 
import { Cards } from '../api/cards.js'; 

import Card from './Card.js';
 
// App component - represents the whole app
class App extends Component {

  constructor() {
    super();
    this.emojiArr = ['😀','⚽️','🍎','🚲'];
    this.numCards = 8;
    this.timesUsed = [0,0,0,0];
    this.flips = 0;
    this.curFlipped = 0;
    for (var i = 1; i < this.numCards+1; i++)
    {
        Cards.remove({_id: i.toString()});
    }
    this.saveCards();
    }

  saveCards() {
    for (var i = 1; i < this.numCards+1; i++)
      Cards.insert({_id: i.toString(), _back: this.randomEmoji()});
  }
 
  writeFlips() {
    var flip = this.flips;
    document.getElementById('flipper').innerHTML = flip;
  }

  renderCards() {
    return this.props.cards.map((card) => (
      <Card key={card._id} card={card} />
    ));
  }

  randomEmoji() {
    do {
    var emojiNum = Math.floor((Math.random() * (this.numCards/2)));
    } while (this.timesUsed[emojiNum] >= 2);
    this.timesUsed[emojiNum]++;
    //console.log(this.emojiArr[emojiNum]);
    return (this.emojiArr[emojiNum]);
  }
 
  render() {
    //console.log("test");
    if(!Meteor.isCordova)
    {
      return (
        <div id='web'>
          <header>
            <h1>Matching Game!</h1>
         </header>   
         <table>
           <tbody><tr>{this.renderCards()}</tr></tbody>
          </table>
       </div>
     );
    }
    else
      {
        return (
        <div id='mobile'>
          <header>
            <h1>Mobile Matching Game!</h1>
         </header>   
         <table>
           <tbody><tr>{this.renderCards()}</tr></tbody>
          </table>
       </div>
      );
      }
  }
}

export default withTracker(() => {
  return {
    cards: Cards.find({}).fetch(),
  };
})(App);