import Ember from 'ember';
import {dbFishing}  from './../data/fishing';

export default Ember.Component.extend({

  init() {
    this._super(...arguments);

    var allBaits = dbFishing.getAllBaits();
    var baitDetail = [];
    allBaits.forEach( (bait) =>{
      let active = this.get('fish').hasBait(bait);
      baitDetail.push({color: bait.hexcolor, id:bait.id, active:active});
    });

    this.set('baitDetail', baitDetail);
  },

});
