import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    save(){
      this.get('model').save().then(
        ()=>this.transitionToRoute('calendars'),
        ()=>console.log('did not save')
        );
    },
    cancel(){
      //console.log('c');
      this.get('model').deleteRecord();
      //this.transitionToRoute('calendars');
      return true;
    }
  }
});
