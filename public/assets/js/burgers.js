$(function() {
  //When clicked, will change devour value assigned to each burger
  $(".change-devour").on("click", function(event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");

    var newDevourState = {
      devour: newDevour
    };
    //Updates the devour state on api side
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(function() {
      console.log("changed devour to", newDevour);
      location.reload();
    });
  });
  //Form to create a new burger
  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      name: $("#ca")
        .val()
        .trim(),
      devour: $("[name=devour]:checked")
        .val()
        .trim()
    };
    //Sends POST request to API to store new burger
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("created new burger");
      location.reload();
    });
  });
  //Listens for click event on delete button
  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");
    //Sends delete request to the API to remove the burger from storage
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(function() {
      console.log("deleted burger", id);
      location.reload();
    });
  });
});
