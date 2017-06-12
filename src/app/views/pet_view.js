import Backbone from 'backbone';

var PetView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;

    this.listenTo(this.model, "change",
    this.render);
  },
  render: function() {
    var compiledTemplate =
    this.template(this.model.toJSON());

    this.$el.html(compiledTemplate);

    return this;
  },
  events: {
    'click button.alert': "deletePet"
  },

  deletePet: function() {
    this.model.destroy();
        //here is where we would normally trigger a delete route as in rails.
  }

});

export default PetView;
