import Ember from 'ember';
import {dbFishing}  from './../../data/fishing';

export default Ember.Route.extend({
  model() {
    return dbFishing.getAllIslands();
	}
});
