Package.describe({
  summary: "A package that gives you all the inflection methods as Handlebar helpers"
});

Package.on_use(function(api) {
  api.use(['handlebars'], 'client');
  api.add_files('inflection.js', 'client');
  api.add_files(['helper.js'], 'client');
});
