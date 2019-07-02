const frisby = require("frisby");

it("should return a list of countries", function() {
  // Return the Frisby.js Spec in the 'it()' (just like a promise)
  return frisby
    .get("http://localhost:8008/api/lookup/country")
    .expect("status", 200);
});
