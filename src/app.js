import $ from 'jquery';
import _ from 'underscore';

import PetList from 'app/collections/pet_list';
import PetListView from 'app/views/pet_list_view';


var petList = new PetList();
petList.fetch();

//.fetch will get the url and once it has the data it's going to trigger the parse function
//tecth can take an argument of a search parameter

var individualPetData = {
  name: "Pupper"
};

var myPet = new Pet(individualPetData);

var getFormData = function() {
  var formName = $("#name").val();
  $("#name").val('');
  return {
    name: formName,
  };
};

var render = function(pet) {
  // Get the Template using jQuery
  var templateText = $('#individualPetTemplate').html();

  // Create an Underscore Template Object
  var templateObject = _.template(templateText);

  // Fill in the ERB with data from
  // our pet.
  //console.log(templateObject(.toJSON()));
  var compiledHTML = $(templateObject(pet.toJSON()));

  // Append the result to the DOM
  $('.pets').append(compiledHTML);

  compiledHTML.find('button.alert').click({petToRemove: pet}, function(params){
    myPetList.remove(params.data.petToRemove);
  });

  // var renderList = function(petList) {
  //   // Clear the list
  //   $(".pets").empty();

    // Loop Through rendering each
    petList.each(function(pet) {
      // Create a PetView
      var petView = new PetView({
        model: pet, // get model
          // the template
        template: _.template( $('#individualPetTemplate').html() )
      });
      // Render the View
      // Then append the result
      // to the DOM
      $(".pets").append(petView.render().el);
    });
  };


$(document).ready(function() {

  var petListView = new PetListView({
      model: petList,
      template:
      _.template($('#individualPetTemplate').html()),
      el: 'main'
    });
  petListView.render();
  });


  petList.on("update", function() {
    renderList(petList);
  });

  $("#add-pet").click(function() {
    // Creating a new
    // With the form data
    var pet = new Pet(getFormData());
    //you'll need to shape the create body object how you need it to be
    this.model.create(pet);
    //this.model.destroy(pet);
    // Add it to the list
    petList.add(pet);

    // re-render the list
    // renderList(petList);
  });


});
