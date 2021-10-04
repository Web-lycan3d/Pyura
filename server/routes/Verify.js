/** @format */

const express = require("express");
const router = express.Router();
const config = require("config");
const port = process.env.PORT || 4000;

const accountSid =
  port === 4000
    ? process.env.TWILIO_ACCOUNT_SID
    : process.env.TWILIO_ACCOUNT_SID;
const authToken =
  port === 4000 ? process.env.TWILIO_AUTH_TOKEN : process.env.TWILIO_AUTH_TOKEN;

const client = require("twilio")(accountSid, authToken);

router.post("/user/phone", (req, res) => {
  const { phoneNo } = req.body;
  client.verify
    .services(
      port === 4000
        ? "VA1118079ecec03825b5ffdc3c70010624"
        : process.env.TWILIO_SID
    )
    .verifications.create({
      to: phoneNo,
      channel: "sms",
    })
    .then((verification) => res.json({ otpStatus: true }))
    .catch((err) => res.status(400).json({ otpStatus: false }));
});

router.post("/user/otp", (req, res) => {
  console.log("S");
  const { phoneNo, userOtp } = req.body;
  client.verify
    .services(port === 4000 ? process.env.TWILIO_SID : process.env.TWILIO_SID)
    .verificationChecks.create({
      to: phoneNo,
      code: userOtp,
    })
    .then((verification_check) => {
      if (verification_check.status === "approved") {
        res.json({ verified: true });
      } else {
        res.json({ verified: false });
      }
    })
    .catch((err) => res.json({ verified: false }));
});

module.exports = router;
