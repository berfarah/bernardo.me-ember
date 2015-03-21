import Ember from 'ember';
import layout from '../templates/components/blog-list';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'article',
  classNames: ['col-md-3', 'col'],
  classNameBindings: ['theType', 'hasImg'],
  theType: function () {
	return this.get('item.type');
  }.property(),
  hasImg: function () {
	if (this.get('item.image')) { return 'has-img'; }
  }.property(),
  firstTag: function () {
  	return (this.get('item.tags') || [])[0];
  }.property()
});
