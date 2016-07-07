import Ember from 'ember';

export function dynamicBackgroundColor(color) {
  return Ember.String.htmlSafe("background-color:" + color);
}

export default Ember.Helper.helper(dynamicBackgroundColor);
