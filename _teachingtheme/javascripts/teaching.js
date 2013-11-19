
// smooth scrolling links
// scroll to content when you click on the logo. - retrieved from http://www.sycha.com/jquery-smooth-scrolling-internal-anchor-links
$(".scroll").click(function(event){    
  event.preventDefault();
  //$('html,body').animate({scrollTop:$(this.hash).offset().top-52}, 800);
  $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
});

$(document).ready(function() {
  $('.designamations p img').parent().addClass('imagewrap');
  $('.calendar .week.past .row').hide();
  $('.calendar .week.past h2').click(function(event){
    event.preventDefault();
    //$('html,body').animate({scrollTop:$(this.hash).offset().top-52}, 800);
    $(this).parent().find('.row').toggle('slow');
  });

});

$(window).load(function() {
  var diw   =  $('.designamations img').width();
  var ratio = (diw*(320/480));
  $('.designamations p').height(ratio);
});

$(window).resize(function() {
  var diw   =  $('.designamations img').width();
  var ratio = (diw*(320/480));
  $('.designamations p').height(ratio);
});

