import Ember from 'ember';

export default Ember.Controller.extend({
  monthName:moment().subtract(2,'m').add(3,'y').format('MMMM YYYY')
});
