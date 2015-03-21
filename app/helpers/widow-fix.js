import Ember from 'ember';

export function widowFix(text /*, options*/) {
	var esc = Ember.Handlebars.Utils.escapeExpression(text);
	if( esc.split(' ').slice(-1)[0].length < 8 ) {
		return new Ember.Handlebars.SafeString(esc.replace(/ ([^ ]+)$/g, '&nbsp;$1'));
	} else {
		return text;
	}
}

export default Ember.Handlebars.makeBoundHelper(widowFix);
