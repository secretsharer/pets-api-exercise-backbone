import Backbone from 'backbone';

import PetView from './pet_view';

var PetListView = Backbone.View.extend({
  initialize: function(params) {
    this.template =
    params.template;

    this.$el.addClass("pet...");
  },

  render: function() {
    //clears pets
    this.$("pets...").empty();
    //save a reference to `this`
    var that = this;

    //loop through collection of pets
    this.model.each(function(pet) {
      //create a new view for each pet
      var petView = new PetView({
        model: pet,
        template: this.template
      });
      //rendered the view and appended it to pets
      that.$("pets").append(petView).render().$el

    });
    return this;
  }
});

export default PetListView;
