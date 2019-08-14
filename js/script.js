$(document).ready(function(){
  $("#formOne").submit(function(event) {
    var personName = $("input#person1").val();
    var address = $("input#address").val();

    $(".person1").text(personName);
    $(".address").text(address);
    $("#letter").show();

    event.preventDefault();
  });
});
