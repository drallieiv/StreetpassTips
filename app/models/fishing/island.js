import Ember from 'ember';

export default Ember.Object.extend({
  id:'',          // Island 4 letters code
  name:'',        // English Island Name
  ticket: null,   // Type of ticket required
  spots: [],      // List of fishing spots
});
