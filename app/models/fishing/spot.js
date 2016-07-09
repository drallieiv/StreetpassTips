import Ember from 'ember';

export default Ember.Object.extend({
  id:'',            // Code for the spot, 4 letters
  name: '',         // English name of the stpo
  type: '',         // First letter of type (CLRD)  for: Coast, Lake/Pond, River, Deep-Sea
  fishs: [],        // List of Fishes that can be caught at that location
  island: undefined // The Island this spot belongs to
});
