$ 'dom.ready', ->
  $.getJSON "http://search.twitter.com/search.json?q=%23rubythankful&rpp=100&callback=?", (search)->
    $.each search.results, ->
      $('#stream').append """
        <article class='tweet'>
          <a class='avatar' href='http://twitter.com/#{this.from_user}'><img src='#{this.profile_image_url}' alt='#{this.from_user}'/></a>
          <div class='body'>
            <span class='author'>#{this.from_user}</span>
            <span class='text'>#{this.text}</span>
          </div>
        </article>
      """
