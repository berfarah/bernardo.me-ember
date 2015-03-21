import Ember from 'ember';

export default Ember.Mixin.create({
	bindScrolling: function(opts) {
		var onScroll,
		    _this = this,
		    debounce = function(func, wait) {
			var self, args;
			var later = function() {
				func.apply(self, args);
			};

			return function() {
				self = this;
				args = arguments;
				Ember.run.debounce(null, later, wait);
			};
		};

		opts = opts || { debounce : 100 };

		if (opts.debounce) {
			onScroll = debounce(function () {
				return _this.scrolled();
			}, 1);
		} else {
			onScroll = function(){
				return _this.scrolled();
			};
		}

		Ember.$(document).bind('touchmove', onScroll);
		Ember.$(window).bind('scroll', onScroll);
	},

	unbindScrolling: function() {
		Ember.$(window).unbind('scroll');
		Ember.$(document).unbind('touchmove');
	}
});
