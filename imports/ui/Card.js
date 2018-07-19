import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Cards } from '../api/cards.js';
import App from './App.js';

export default class Card extends Component {

constructor(props) {
		super(props );
		flipped: false;
	}

flipCard() {
		//console.log('flip');
		App.curFlipped++;
		if (!this.flipped)
			App.flips++;
		this.flipped = !this.flipped;
		this.forceUpdate();
		}

render() {
		/*var type;
		if (Meteor.isCordova)
			type = 'mobile';
		else
			type = 'web';*/
		if (this.flipped)
		{
			//console.log('1');
			return (<td  onClick={this.flipCard.bind(this)}> {this.props.card._back} </td>);
		}
		else
		{
			//console.log('2');
			return (<td onClick={this.flipCard.bind(this)}> {String.fromCharCode(160)} </td>);
		}
	}
}