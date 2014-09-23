  $(".red").click(function () {
    $("body").removeClass("grey green white yellow blue").addClass("red");
    });    

  $(".green").click(function () {
    $("body").removeClass("grey red white yellow blue").addClass("green");
    });    

  $(".blue").click(function () {
    $("body").removeClass("grey red green white yellow").addClass("blue");
    });    

  $(".yellow").click(function () {
    $("body").removeClass("grey red white blue green").addClass("yellow");
    });
    
  $(".white").click(function () {
    $("body").removeClass("red white blue green yellow").addClass("grey")
    });