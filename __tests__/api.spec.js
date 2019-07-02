const frisby = require("frisby");

describe("Lookup", function() {
  it("should return a list of random entries", function() {
    return frisby
      .get("http://localhost:8008/api/lookup/random/thing")
      .expect("status", 200);
  });

  it("should return a list of gender", function() {
    return frisby
      .get("http://localhost:8008/api/lookup/gender")
      .expect("status", 200);
  });

  it("should return a list of countries", function() {
    return frisby
      .get("http://localhost:8008/api/lookup/country")
      .expect("status", 200);
  });

  it("should return a list of enrolment status", function() {
    return frisby
      .get("http://localhost:8008/api/lookup/enrolment_status")
      .expect("status", 200);
  });

  it("should return a list of enrolment type", function() {
    return frisby
      .get("http://localhost:8008/api/lookup/enrolment_type")
      .expect("status", 200);
  });

  it("should return a list of attendance type", function() {
    return frisby
      .get("http://localhost:8008/api/lookup/attendance_type")
      .expect("status", 200);
  });

  it("should return a list of attendance reason", function() {
    return frisby
      .get("http://localhost:8008/api/lookup/attendance_reason")
      .expect("status", 200);
  });

  it("should return a list of ethnic origin", function() {
    return frisby
      .get("http://localhost:8008/api/lookup/ethnic_origin")
      .expect("status", 200);
  });

  it("should return a list of employment status", function() {
    return frisby
      .get("http://localhost:8008/api/lookup/employment_status")
      .expect("status", 200);
  });

  it("should return a list of occupations", function() {
    return frisby
      .get("http://localhost:8008/api/lookup/occupation")
      .expect("status", 200);
  });
});
