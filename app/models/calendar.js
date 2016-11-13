import DS from 'ember-data';

export default DS.Model.extend({
  name:attr('string'),
  notes:attr('string',{defaultValue:''}),
  days:hasMany('day')
});
