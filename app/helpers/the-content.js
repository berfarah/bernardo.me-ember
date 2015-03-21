import Ember from 'ember';

export function theContent(content /*,options*/) {
	var output = '<p>' + (content || '').split('\n').join('</p><p>') + '</p>';
	return new Ember.Handlebars.SafeString(output);
}

export default Ember.Handlebars.makeBoundHelper(theContent);
