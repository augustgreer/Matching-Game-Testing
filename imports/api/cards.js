//import { meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
//import { check } from 'meteor/check';

export const Cards = new Mongo.Collection('cards');

/*Meteor.methods({
			'cards.flipCard'(taskId, setFlipped) {
				check(taskID, String);
				check(setFlipped, Boolean);

				//const card = Cards.findOne(taskID);
				this.flipped = !this.flipped;
				this.forceUpdate();
			})*/