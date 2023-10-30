$(() => {
  $("button").on("click", () => {
    console.log("Hello");
    $("#hea").addClass("heading");
    $("#fee").addClass("fee");
    $("#subjects").addClass("sub");
    $("#future").addClass("future");
    $("#load").load("loadplease.html");
    $("#load").addClass('load')
    $("button").hide();
  });
});
