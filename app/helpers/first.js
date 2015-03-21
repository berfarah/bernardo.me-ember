import Ember from 'ember';

export function first(options) {
	console.log(options);
}

export default Ember.HTMLBars.makeBoundHelper(first);
