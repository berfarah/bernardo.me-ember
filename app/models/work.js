import DS from 'ember-data';

var Work = DS.Model.extend({
	title: DS.attr('string'),
	summary: DS.attr('string'),
	body: DS.attr('string'),
	image: DS.attr('string'),
	embed: DS.attr('string'),
	position: DS.attr('string'),
	credit: DS.attr('string'),
	credit_url: DS.attr('string'),
	tags: DS.attr(),
	type: DS.attr('string'),
	slug: DS.attr('string')
});

export default Work.reopenClass({
	FIXTURES: [
		{
			id: 1,
			image: "http://localhost:4200/images/Night-Launch-NASA.jpg",
			position: '20%',
			title: "A Hypothetical NASA Rescue Plan",
			summary: "An incredible article about a potential rescue of Columbia, the doomed NASA flight in 2003. Would make for a terrific movie.",
			credit: "Taken by xyz website",
			credit_url: "http://google.com",
			type: "content",
			slug: "nasa-story"
		},
		{
			id: 2,
			title: "No longer Touching Ground by A.C.T",
			image: "http://bernardo.me/uploads/2014/02/Silence-600x600.jpg",
			summary: "A.C.T manages to live somewhere between progressive rock and broadway. This deliriously happy song is incredibly uplifting",
			tags: ["Song of the Week"],
			type: "content"
		},
		{
			id: 3,
			title: "Dr. Seuss",
			summary: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind",
			tags: ["Quotes"],
			type: "quote"
		},
		{
			id: 4,
			title: "Hyperventilate by Frost*",
			embed: "https://play.spotify.com/track/2qOCdnZlE6zADE0MJw78GW",
			summary: "This instrumental song introduced me to the band, <strong>Frost*</strong>, and is a terrific opener for their first album",
			tags: ["Song of the Week", "asdf"],
			image: "http://bernardo.me/uploads/2013/08/Frost-Milliontown.jpg",
			body: "Volutpat tellus sociosqu felis penatibus parturient integer primis parturient et nam sed est suspendisse suspendisse. A a primis fames nunc vestibulum condimentum quam morbi vel ante vestibulum ante elementum blandit rhoncus ac vestibulum quam elit ipsum a condimentum quam ullamcorper at scelerisque adipiscing proin. Parturient ante a aliquam phasellus natoque vestibulum a leo eget suspendisse sed dui posuere a at. Condimentum varius consequat vulputate dictumst a tempus leo suspendisse sem class parturient a nascetur consectetur sagittis adipiscing orci luctus a torquent integer mattis. A dui praesent nec proin quis pharetra dictum adipiscing quis nibh massa sed habitasse a vitae turpis dapibus penatibus ligula bibendum iaculis magna consectetur a. At quis parturient vestibulum mus a lacinia urna a dapibus odio a arcu ullamcorper nulla nunc arcu.\nParturient nibh nisi ac a eget curae nam aenean iaculis semper leo porttitor a vestibulum sagittis. Molestie laoreet a elit laoreet metus eros praesent mi inceptos montes proin imperdiet non varius id condimentum placerat iaculis leo suspendisse sed adipiscing sed ultricies fringilla a. Ullamcorper a magna in commodo adipiscing vestibulum suspendisse conubia a placerat ac nunc odio a.\nLaoreet condimentum consectetur cubilia et amet taciti habitant ullamcorper viverra congue scelerisque aliquam a dui. Malesuada facilisis a volutpat cursus consectetur a parturient bibendum sapien parturient parturient lacus porttitor scelerisque habitasse adipiscing ad quisque quam porttitor cursus donec montes primis suspendisse justo vestibulum. A scelerisque maecenas odio sagittis a a congue natoque vehicula lectus ridiculus vel primis cum ridiculus feugiat. Scelerisque ornare suspendisse sagittis vitae convallis ultrices suspendisse condimentum porttitor pharetra sociosqu vestibulum torquent quis penatibus. Adipiscing mauris a in a adipiscing dis duis pretium augue donec facilisi eget nibh quam ullamcorper penatibus eu vestibulum tristique sodales imperdiet vulputate neque feugiat ac posuere ipsum. Parturient sociis a auctor vestibulum habitant parturient himenaeos quam risus donec parturient consectetur id justo elementum commodo sed a.\nAc mi a parturient parturient massa a adipiscing commodo consectetur duis at scelerisque a venenatis hendrerit senectus consectetur integer eu fames hendrerit montes a maecenas vulputate ornare odio. A sit vestibulum ullamcorper vestibulum consectetur molestie suspendisse consectetur ridiculus netus posuere ullamcorper ac magnis proin suspendisse et magnis augue nisl mattis et. A eu a parturient adipiscing ullamcorper at a quam egestas imperdiet eget tempor at lacinia vestibulum a parturient curae a. In consectetur fermentum parturient condimentum a a adipiscing sociosqu condimentum eleifend bibendum parturient non a nisi sodales habitant scelerisque lacinia metus ante odio semper consequat pretium nisi.\nA auctor cubilia libero est a lacinia dui accumsan iaculis a taciti nostra varius quam platea a quis. A litora scelerisque malesuada convallis curae a hac vestibulum bibendum nulla at suspendisse mus himenaeos gravida vehicula risus scelerisque feugiat. Duis nisl condimentum a adipiscing parturient quis volutpat leo a maecenas mi arcu mi orci adipiscing mollis netus mus suspendisse scelerisque pulvinar ligula est lobortis. Erat facilisi taciti ad nec fermentum a leo vehicula parturient a fringilla praesent vehicula in phasellus lacinia scelerisque suspendisse duis scelerisque nunc volutpat a ridiculus proin a a platea."
		},
		{
			id: 5,
			image: "http://bernardo.me/uploads/2014/02/Mauna-Kea-Heavens-Timelapse.jpg",
			embed: "https://vimeo.com/75542539",
			title: "Mauna Kea Heavens Timelapse",
			summary: "Timelapse of the observatories atop Mauna Kea, Hawaii. The summit is at an altitude of nearly 14,000 ft and is the premiere site for astronomy in the Northern Hemisphere",
			tags: ["Videos"],
			type: "video"
		},
		{
			id: 6,
			title: "Brain to Brain Communication",
			summary: "This could be the beginnings of something amazing. Currently it’s limited to very basic motor movements, but",
			tags: ["Videos"]
		},
		{
			id: 7,
			title: "Dr. Seuss",
			summary: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind",
			tags: ["Quotes"],
			type: "quote"
		},
		{
			id: 8,
			title: "No longer Touching Ground by A.C.T",
			image: "http://bernardo.me/uploads/2014/02/Silence-600x600.jpg",
			summary: "A.C.T manages to live somewhere between progressive rock and broadway. This deliriously happy song is incredibly uplifting",
			tags: ["Song of the Week"]
		},
		{
			id: 9,
			title: "Hyperventilate by Frost*",
			embed: "https://play.spotify.com/track/2qOCdnZlE6zADE0MJw78GW",
			summary: "This instrumental song introduced me to the band, <strong>Frost*</strong>, and is a terrific opener for their first album",
			tags: ["Song of the Week", "asdf"],
			image: "http://bernardo.me/uploads/2013/08/Frost-Milliontown.jpg",
			body: "Volutpat tellus sociosqu felis penatibus parturient integer primis parturient et nam sed est suspendisse suspendisse. A a primis fames nunc vestibulum condimentum quam morbi vel ante vestibulum ante elementum blandit rhoncus ac vestibulum quam elit ipsum a condimentum quam ullamcorper at scelerisque adipiscing proin. Parturient ante a aliquam phasellus natoque vestibulum a leo eget suspendisse sed dui posuere a at. Condimentum varius consequat vulputate dictumst a tempus leo suspendisse sem class parturient a nascetur consectetur sagittis adipiscing orci luctus a torquent integer mattis. A dui praesent nec proin quis pharetra dictum adipiscing quis nibh massa sed habitasse a vitae turpis dapibus penatibus ligula bibendum iaculis magna consectetur a. At quis parturient vestibulum mus a lacinia urna a dapibus odio a arcu ullamcorper nulla nunc arcu.\nParturient nibh nisi ac a eget curae nam aenean iaculis semper leo porttitor a vestibulum sagittis. Molestie laoreet a elit laoreet metus eros praesent mi inceptos montes proin imperdiet non varius id condimentum placerat iaculis leo suspendisse sed adipiscing sed ultricies fringilla a. Ullamcorper a magna in commodo adipiscing vestibulum suspendisse conubia a placerat ac nunc odio a.\nLaoreet condimentum consectetur cubilia et amet taciti habitant ullamcorper viverra congue scelerisque aliquam a dui. Malesuada facilisis a volutpat cursus consectetur a parturient bibendum sapien parturient parturient lacus porttitor scelerisque habitasse adipiscing ad quisque quam porttitor cursus donec montes primis suspendisse justo vestibulum. A scelerisque maecenas odio sagittis a a congue natoque vehicula lectus ridiculus vel primis cum ridiculus feugiat. Scelerisque ornare suspendisse sagittis vitae convallis ultrices suspendisse condimentum porttitor pharetra sociosqu vestibulum torquent quis penatibus. Adipiscing mauris a in a adipiscing dis duis pretium augue donec facilisi eget nibh quam ullamcorper penatibus eu vestibulum tristique sodales imperdiet vulputate neque feugiat ac posuere ipsum. Parturient sociis a auctor vestibulum habitant parturient himenaeos quam risus donec parturient consectetur id justo elementum commodo sed a.\nAc mi a parturient parturient massa a adipiscing commodo consectetur duis at scelerisque a venenatis hendrerit senectus consectetur integer eu fames hendrerit montes a maecenas vulputate ornare odio. A sit vestibulum ullamcorper vestibulum consectetur molestie suspendisse consectetur ridiculus netus posuere ullamcorper ac magnis proin suspendisse et magnis augue nisl mattis et. A eu a parturient adipiscing ullamcorper at a quam egestas imperdiet eget tempor at lacinia vestibulum a parturient curae a. In consectetur fermentum parturient condimentum a a adipiscing sociosqu condimentum eleifend bibendum parturient non a nisi sodales habitant scelerisque lacinia metus ante odio semper consequat pretium nisi.\nA auctor cubilia libero est a lacinia dui accumsan iaculis a taciti nostra varius quam platea a quis. A litora scelerisque malesuada convallis curae a hac vestibulum bibendum nulla at suspendisse mus himenaeos gravida vehicula risus scelerisque feugiat. Duis nisl condimentum a adipiscing parturient quis volutpat leo a maecenas mi arcu mi orci adipiscing mollis netus mus suspendisse scelerisque pulvinar ligula est lobortis. Erat facilisi taciti ad nec fermentum a leo vehicula parturient a fringilla praesent vehicula in phasellus lacinia scelerisque suspendisse duis scelerisque nunc volutpat a ridiculus proin a a platea."
		}
	]
});
