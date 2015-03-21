import Ember from 'ember';

export default Ember.Route.extend({
	model: function () {
		return this.store.find('post').then(function (a) {
			return a.get('firstObject');
		});
	}
});
