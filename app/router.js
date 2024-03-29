import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
    this.resource('posts', { path: '/blog' }, function () {
    	this.route('post', { path: '/:post_id' });
    });
    this.resource('works', { path: '/work' }, function () {
    	this.route('work', { path: '/:work_id' });
    });
});

export default Router;
