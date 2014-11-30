module.exports = RoutingContext;

function RoutingContext(request, routable) {
  this.request = request;
  if (routable) {
    this.push(routable);
  }
}

RoutingContext.prototype = {
  push: function(routable) {
    this.contextStack.push(routable);
  },
  pop: function() {
    this.contextStack.pop();
  }
};
