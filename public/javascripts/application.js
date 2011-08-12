(function() {
  $('dom.ready', function() {
    return $.getJSON("http://search.twitter.com/search.json?q=%23rubythankful&rpp=100&callback=?", function(search) {
      return $.each(search.results, function() {
        return $('#stream').append("<article class='tweet'>\n  <a class='avatar' href='http://twitter.com/" + this.from_user + "'><img src='" + this.profile_image_url + "' alt='" + this.from_user + "'/></a>\n  <div class='body'>\n    <span class='author'>" + this.from_user + "</span>\n    <span class='text'>" + this.text + "</span>\n  </div>\n</article>");
      });
    });
  });
}).call(this);
