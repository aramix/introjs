Package.describe({
  name: 'aramix:introjs',
  version: '2.1.1',
  // Brief, one-line summary of the package.
  summary: 'Meteor package for intro.js with improvements',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/aramix/meteor-intro.js.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.add_files('./lib/intro.js/minified/intro.min.js', 'client');
  api.add_files('./lib/intro.js/minified/introjs.min.css', 'client');
  api.add_files('./lib/main.js', 'client');
  api.export('introJs', 'client');
});

Package.onTest(function(api) {
  api.use(['aramix:introjs', 'tinytest'], ['client']);
  api.mainModule('test.js', ['client']);
});
