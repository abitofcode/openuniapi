const express = require("express");
const router = express.Router();
const lookupController = require("./lookupController");

router.get("/random/:thing", lookupController._thing);
router.get("/gender", lookupController._gender);
router.get("/country", lookupController._country);
router.get("/enrolment_status", lookupController._enrolment_status);
router.get("/enrolment_type", lookupController._enrolment_type);
router.get("/attendance_type", lookupController._attendance_type);
router.get("/attendance_reason", lookupController._attendance_reason);
router.get("/ethnic_origin", lookupController._ethnic_origin);
router.get("/employment_status", lookupController._employment_status);
router.get("/occupation", lookupController._occupation);

module.exports = router;
