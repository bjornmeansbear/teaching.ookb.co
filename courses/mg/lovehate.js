<script>
  $.getJSON('lovehate.json', function(data) {
    $.each(data.students, function(data) {
      console.log(this["name"]);
      $('ul#loveHate').append('<li class="studentEntry"><ul><li class="love">Love: <a href="'+ this["love.url"] + '">'+ this["love.blurb" +'</li><li class="hate">Hate: <a href="'+ this["hate.url"] + '">'+ this["hate.blurb" +'</li><li class="onemore">More: <a href="'+ this["onemore.url"] + '">'+ this["onemore.blurb" +'</li></ul></li>');
    });
  });
</script>

