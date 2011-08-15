$ 'dom.ready', ->
  $.getJSON "http://search.twitter.com/search.json?q=%23rubythankful&rpp=100&callback=?", (search)->
    $.each search.results, ->
      linked_text = this.text.replace(/@([0-9a-z_]+)/gi, "<a href='http://twitter.com/$1'>@$1</a>").replace(/#([0-9a-z_-]+)/gi, "<a href='http://twitter.com/search?q=%23$1'>#$1</a>")
      $('#stream').append """
        <article class='tweet'>
          <a class='avatar' href='http://twitter.com/#{this.from_user}'><img src='#{this.profile_image_url}' alt='#{this.from_user}'/></a>
          <div class='body'>
            <a class='author' href='http://twitter.com/#{this.from_user}'>#{this.from_user}</a>
            <span class='text'>#{linked_text}</span>
          </div>
        </article>
      """
