import Ember from 'ember';

export default Ember.Controller.extend({
	first: function () {
		return (this.get('content') || []).slice(0,1)[0];
	}.property('content'),
	rest: function () {
		var array = this.get('content');
		return array.slice(1).chunk(4);
	}.property('content')
});
