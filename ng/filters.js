app.filter('authorLink', function() {
  return function(input) {
    var out = input.match(/https([\s\S]*?)\/"/);

    return out[1];
  };
})
