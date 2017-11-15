// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".eat").on("click", function(event) {
    var id = $(this).data("id");
    var newAte = $(this).data("ate");

    var newAteState = {
      ate: newAte
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newAteState
    }).then(
      function() {
        console.log("changed ate to", newAte);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete").click(function(event){
    var id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
    function(){
      console.log("Ate a burger with id: " + id);

      location.reload();
    });
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#burg").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
