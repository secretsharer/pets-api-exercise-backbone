import Backbone from 'backbone';

var Pet = Backbone.Model.extend({
  defaults: {
    name: 'DEFAULT',

  },
  logStatus: function() {
    console.log("Model " + this.cid);
    console.log("Name: " +   this.get("name"));
    console.log("Completed: " + this.get("completed"));
  },
  initialize: function(params) {
    console.log("Starting", params);
    this.logStatus();
  }

});

export default Pet;
