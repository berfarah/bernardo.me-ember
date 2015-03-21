import Ember from 'ember';
import Scrolling from '../mixins/scrolling';

export default Ember.View.extend(Scrolling, {
	tagName: 'figure',
	attributeBindings: 'style',
	didInsertElement: function () {
		if( this.get('animation') ) {
			this.bindScrolling();
		}
	},
	willDestroyElement: function () {
		if( this.get('animation') ) {
			this.unbindScrolling();
		}
	},
	scrolled: function () {
		var height    = Ember.$('.feature').height(),
		    scrolled  = Ember.$(window).scrollTop(),
		    result    = scrolled > height ? 1 : scrolled/height,
		    blur      = 'blur(' + (result * 10) + 'px)',
		    opacity   = (1 - result) * 0.3;

		return this.$().css({
			'-webkit-filter': blur,
			'filter': blur,
			'opacity': opacity });
	},
	style: function () {
		var image    = this.get('context.item.image'),
		    position = this.get('context.item.position') || '50%';
		return 'background-image: url(' + image + '); background-position-y: ' + position + ';';
	}.property()
});
