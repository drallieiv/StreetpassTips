import Ember from 'ember';
import {dbFishing}  from './../data/fishing';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);

    var allBaits = dbFishing.getAllBaits();
    var baitDetail = [];
    allBaits.forEach(function (element) {

      //TODO Search Letter in bais
      var active = (Math.random() > 0.5) ? true : false;

      baitDetail.push({color: element.hexcolor, active:active});
    });
    this.set('baitDetail', baitDetail);

  },

});
