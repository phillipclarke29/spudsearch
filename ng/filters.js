app.filter('test', function() {
  return function(input) {
    var out = input.match(/<a[^>]*>([\s\S]*?)<\/a>/).join();

    return out;
  };
})
