// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by intro.js1.js.
import { name as packageName } from "meteor/intro.js1";

// Write your tests here!
// Here is an example.
Tinytest.add('intro.js1 - example', function (test) {
  test.equal(packageName, "intro.js1");
});
