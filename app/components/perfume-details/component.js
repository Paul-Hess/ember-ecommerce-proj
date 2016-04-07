import Ember from 'ember';

export default Ember.Component.extend({
  getAverage: Ember.computed.map('perfume.ratings', function(rating, index) {
    console.log(rating);
    return rating[index];
  }),
  actions: {
    addComment(params) {
      this.sendAction('addComment', params);
    },
    sendRating(params) {
    this.sendAction('sendRating', params);
    }
  }
});
