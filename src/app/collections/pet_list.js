import Backbone from 'backbone';

import Pet from 'app/models/pet';

var PetList = Backbone.Collection.extend({
  model: Pet,
  url: 'http:petdibs.herokuapp.com/pets',
  parse: function(data) {
    return data.pets;
  }
});

export default PetList;

//data["pets"] another way to write this instead of dot notation
//you can make this parse function as custom as you need

//will assume a get verb for restul route and all of the pets associated
//once collection is configured we are ready to trigger get request
