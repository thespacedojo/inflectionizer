Package.describe({
  summary: "A package that gives you all the inflection methods as Handlebar helpers",
  version: '0.3.0',
  name: "joshowens:inflectionizer",
  git: 'https://github.com/MeteorClub/inflectionizer'
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@0.9.0");
  api.use(['ui'], 'client');
  api.addFiles('inflection.js', 'client');
  api.addFiles(['helper.js'], 'client');
});
