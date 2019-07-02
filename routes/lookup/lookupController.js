const { getRandomInt } = require("../../helpers");
const { isoCountries } = require("./isoCountries.js");
const faker = require("faker");

const _thing = async (req, res) => {
  if (req.params.thing === "end") return res.send([]);
  const maxResults = 3 + getRandomInt(10);
  const results = [];
  for (var i = 0; i < maxResults; i++) {
    const fakeWord = faker.lorem.word();
    results.push({ text: req.params.thing + " " + fakeWord, value: fakeWord });
  }
  results.push({ text: "end", value: "end" });
  res.send(results);
};

const _gender = (req, res) => {
  const gender = [
    { text: "male", value: 1001 },
    { text: "female", value: 1002 },
    { text: "Other", value: 1003 }
  ];
  res.send(gender);
};

const _country = (req, res) => {
  var country = Object.keys(isoCountries).map(function(key) {
    return { text: isoCountries[key], value: key };
  });
  res.send(country);
};

const _enrolment_status = (req, res) => {
  const enrolmentstatus = [
    { text: "First Time Freshman", value: 2001 },
    { text: "Graduate Student", value: 2002 },
    { text: "Readmit", value: 2003 },
    { text: "Transfer", value: 2004 }
  ];
  res.send(enrolmentstatus);
};

const _enrolment_type = (req, res) => {
  const enrolmenttype = [{ text: "24 hour", value: 3001 }];
  res.send(enrolmenttype);
};

const _attendance_type = (req, res) => {
  const attendancetype = [
    { text: "Day", value: 4001 },
    { text: "Evening", value: 4002 },
    { text: "Online", value: 4003 },
    { text: "The entity name 2", value: 4004 },
    { text: "The entity name 2", value: 4005 }
  ];
  res.send(attendancetype);
};

const _attendance_reason = (req, res) => {
  const attendancereason = [
    { text: "Reason 1", value: 5001 },
    { text: "Reason 2", value: 5002 },
    { text: "Reason 3", value: 5003 },
    { text: "Reason 4", value: 5004 },
    { text: "Reason 5", value: 5005 }
  ];
  res.send(attendancereason);
};

const _ethnic_origin = (req, res) => {
  const ethnicorigin = [
    { text: "White", value: 6001 },
    { text: "White - Irish", value: 6002 },
    { text: "White - E/W/S/NI/British", value: 6003 },
    { text: "White - Scottish", value: 6004 },
    { text: "Irish Traveller", value: 6005 },
    { text: "Gypsy or Traveller", value: 6006 },
    { text: "Other White background", value: 6007 },
    { text: "Black or Black British - Caribbean", value: 6008 },
    { text: "Black or Black British - African", value: 6009 },
    { text: "Other Black background", value: 6010 },
    { text: "Asian or Asian British - Indian", value: 6011 },
    { text: "Asian or Asian British - Pakistani", value: 6012 },
    { text: "Asian or Asian British - Bangladeshi", value: 6013 },
    { text: "Chinese", value: 6014 },
    { text: "Other Asian background", value: 6015 },
    { text: "Mixed - White and Black Caribbean", value: 6016 },
    { text: "Mixed - White and Black African", value: 6017 },
    { text: "Mixed - White and Asian", value: 6018 },
    { text: "Other mixed background", value: 6019 },
    { text: "Arab", value: 6020 },
    { text: "Other ethnic background", value: 6021 },
    { text: "Not known", value: 6022 },
    { text: "Information refused", value: 6023 }
  ];
  res.send(ethnicorigin);
};

const _employment_status = (req, res) => {
  const employmentstatus = [
    { text: "Reason 1", value: 7001 },
    { text: "Reason 2", value: 7002 },
    { text: "Reason 3", value: 7003 },
    { text: "Reason 4", value: 7004 },
    { text: "Reason 5", value: 7005 }
  ];
  res.send(employmentstatus);
};

const _occupation = (req, res) => {
  const occupation = [
    { text: "Occupation 1", value: 8001 },
    { text: "Occupation 2", value: 8002 },
    { text: "Occupation 3", value: 8003 },
    { text: "Occupation 4", value: 8004 },
    { text: "Occupation 5", value: 8005 }
  ];
  res.send(occupation);
};

module.exports = {
  _thing,
  _gender,
  _country,
  _enrolment_status,
  _enrolment_type,
  _attendance_type,
  _attendance_reason,
  _ethnic_origin,
  _employment_status,
  _occupation
};
