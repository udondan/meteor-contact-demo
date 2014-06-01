Router.map(function() {
  this.route("home", {
    path: "/"
  });
  this.route("notFound", {
    path: '*',
    where: 'server',
    action: function() {
      this.response.statusCode = 404;
      this.response.end(Handlebars.templates['404']());
    }
  });
});
