import Ember from 'ember';
import ENV from './config/environment';

var Router = Ember.Router.extend({
  rootURL: ENV.rootURL,
  location: ENV.location
});

Router.map(function() {
  this.route('fishing', function() {
    this.route('index', { path: '/' });
    this.route('locations');
  });
  this.route('about');
});

export default Router;
