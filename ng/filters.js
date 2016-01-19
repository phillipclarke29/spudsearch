app.filter('authorLink', function() {
  return function(input) {
    var out = input.match(/https([\s\S]*?)\/"/);

    return out[1];
  };
})

app.filter('authorName', function() {
  return function(input) {
    var out = input.match(/https:\/\/www.flickr.com\/people\/([\s\S]*?)\/"/);

    return out[1];
  };
})
