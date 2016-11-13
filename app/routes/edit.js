import Ember from 'ember';

export default Ember.Route.extend({
/*  model(params){
    return this.store.findRecord('calendar',params.calendar_id);
  }*/
  actions:{
    cancel(){
      this.transitionTo('calendars');
    }
  }
});
