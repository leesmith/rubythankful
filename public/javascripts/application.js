(function() {
  $('dom.ready', function() {
    return $.getJSON("http://search.twitter.com/search.json?q=%23rubythankful&rpp=100&callback=?", function(search) {
      return $.each(search.results, function() {
        var linked_text;
        linked_text = this.text.replace(/@([0-9a-z_]+)/gi, "<a href='http://twitter.com/$1'>@$1</a>").replace(/#([0-9a-z_-]+)/gi, "<a href='http://twitter.com/search?q=%23$1'>#$1</a>").replace(/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/, "<a href='$0'>$0</a>");
        return $('#stream').append("<article class='tweet'>\n  <a class='avatar' href='http://twitter.com/" + this.from_user + "'><img src='" + this.profile_image_url + "' alt='" + this.from_user + "'/></a>\n  <div class='body'>\n    <a class='author' href='http://twitter.com/" + this.from_user + "'>" + this.from_user + "</a>\n    <span class='text'>" + linked_text + "</span>\n  </div>\n</article>");
      });
    });
  });
}).call(this);
