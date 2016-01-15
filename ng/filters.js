angular.module('spudsearchfilters', []).filter('description', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});
