$.getJSON('https://api.tumblr.com/v2/blog/thunderousmenace.tumblr.com/posts?api_key=OmMwFOoJB741CZxXe57kU8moYu0iMzKMtlDKZdE3djCKqJVWgY&callback=?', function(data) {
  var template = $('#tumbleTemplate').html();
  var info = Mustache.to_html(template, data.response);
  $('#posts').html(info);
  // http://codepen.io/javve/pen/zpuKF?editors=1000
  var options = {
    valueNames: ['tags']
  };
  var tumblrList = new List('tumblr-search', options);
  
    $("button.sort").click(function() {
      var selection = $(this).data("tag");
      console.log( selection + " was chosen!")
      
      $("#posts").show();
      $("button.close").show();
      
      tumblrList.filter(function(item) {
        var tryThis = item.values().tags;

        if (tryThis == selection) {
          return true;
        } else if (selection == "none") {
          return false;
        } else {
          return false;
        }
      });
      return false;
    });
  
    $(".close").click(function() {
      $(this).hide();
      $("#posts").hide();
    });
        
    $(".filter-none").click(function() {
      tumblrList.filter();
      return false;
    });
      
});

$(window).scroll(function() {
  var windowHeight = $(window).height();
   console.log( 'windowHeight ' + windowHeight);
  var totalHeight = $("main").height();
   console.log('totalHeight ' + totalHeight);
  var usableHeight = totalHeight - windowHeight;
   console.log('usableHeight ' + usableHeight);
  var totalScroll = $(window).scrollTop();
   console.log(totalScroll);
  var ratio = totalScroll / usableHeight;
   console.log('ratio ' + ratio);
  var percentage = ratio * 100 + "%";  
   console.log('percentage ' +percentage);
  $(".indicator").width(percentage);
});