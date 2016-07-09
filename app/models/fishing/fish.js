import Ember from 'ember';

export default Ember.Object.extend({
  id:'',          // Code for fish, 4 letters
  stars: 1,       // Star rating for the fish
  name: '',       // English Fish Name
  type: '',       // First letter of type (CLRD)  for: Coast, Lake/Pond, River, Deep-Sea
  baits: [],      // Baits that the fish likes
  points: 0,      // Number of xp points for catching that fish
  gold: 0,         // Money won by catching that fish

  hasBait: function(searchedBait){
    if(Ember.typeOf(searchedBait) === 'instance'){
      return this.get('baits').find( b => b === searchedBait) !== undefined;
    }else if(typeof searchedBait === 'string'){
      return this.get('baits').find( b => b.id === searchedBait) !== undefined;
    }
    return false;
  },

});
