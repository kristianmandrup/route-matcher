module.exports = RoutingController

function RoutingController(router) {
  this.router = router;
}

var matcher = require('../matcher');
var RequestParser = matcher.RequestParser;
var RouteMatcher  = matcher.RouteMatcher;

RoutingController.prototype = {
  route: function(request) {
    this.request = request;
    this.requestParser().parse(this.router);
  },

  requestParser: function() {
    return new RequestParser(this.request, this.routeMatcher());
  },

  routeMatcher: function() {
    return new RouteMatcher(this.request);
  }
};
