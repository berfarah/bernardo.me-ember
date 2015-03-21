import Ember from 'ember';
import layout from '../templates/components/feature-box';

export default Ember.Component.extend({
	layout: layout,
	tagName: 'section',
	classNames: ['feature'],
	classNameBindings: ['theType'],
	theType: function () {
		return this.get('type');
	}.property('type'),
	isQuote: function () {
		return this.get('type') === "quote";
	}.property('type'),
	isContent: function () {
		return this.get('type') === "content";
	}.property('type'),
	isSingle: function () {
		return this.get('type') === "single";
	}.property('type')
});
