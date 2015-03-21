import Ember from 'ember';
import layout from '../templates/components/feature-work';

export default Ember.Component.extend({
	layout: layout,
	tagName: 'section',
	classNames: ['feature'],
	classNameBindings: ['theType'],
	theType: function () {
		return this.get('type');
	}.property('type'),
});
