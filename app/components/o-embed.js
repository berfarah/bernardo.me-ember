import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'iframe',
	height: 500,
	width: 500,
	attributeBindings: ['source:src', 'height', 'width', 'frameborder', 'allowtransparency'],
	source: function() {
		var oembed = '',
		    e = this.get('embed'),
		    that = this,
		    services = {
				spotify: {
					oembed: "https://embed.spotify.com/?uri=",
					regex: /spotify/,
					replace: /^/,
					specs: {
						height: 80
					}
				},
				vimeo: {
					oembed: "//player.vimeo.com/video/",
					regex: /vimeo/,
					replace: /.*\//,
					specs: {
						width: 600,
						height: 340
					}
				}
			};

		_.forEach(services, function (val, key) {
			console.log(val.regex);
			if( e.match(val.regex) ) {
				oembed = e.replace(val.replace,val.oembed);

				_.forEach((val.specs || {}), function (val, key) {
					that.set(key, val);
				});
			}
		});

		// if ( e.match(/spotify/) ) {
		// 	oembed = "https://embed.spotify.com/?uri=";
		// 	this.set('height', 80);
		// }

		return oembed;

	}.property(),
	allowtransparency: 'true',
	frameborder: 0
});
