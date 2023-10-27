import sgMail from "@sendgrid/mail";
import axios from "axios";

const handler = async(req, res) => {
  const {
    fname,
    lname,
    email,
    phone,
    businessname,
    industry,
    estimatedannualrevenue,
    dowehaveaccount,
    howcanwehelp,
    pageName
  } = req.body.data;

     let text = "";
    if (fname) {
      text += `Firstname: ${fname}\n`;
    }

    if (lname) {
      text += `Lastname: ${lname}\n`;
    }

    if (email) {
      text += `Email: ${email}\n`;
    }

    if (phone) {
      text += `Phone: ${phone}\n`;
    }

    if (businessname) {
      text += `Business Name: ${businessname}\n`;
    }

    if (industry) {
      text += `Industry: ${industry}\n`;
    }

    if (estimatedannualrevenue) {
      text += `Estimated Annual Revenue: ${estimatedannualrevenue}\n`;
    }

    if (dowehaveaccount) {
      text += `CW Suite Account: ${dowehaveaccount}\n`;
    }

    if (howcanwehelp) {
      text += `Query: ${howcanwehelp}\n`;
    }
  if (req.method === "POST") {
    let newData ={
        "firstname": fname === undefined || fname === "" ? null:`${fname}`, 
        "lastname": lname === undefined || lname === "" ? null :`${lname}`,
        "email": email === undefined || email === "" ? null : `${email}`,
        "phone": phone === undefined || email === "" ? null :`${phone}`,
        "name": fname === undefined || fname === "" ? null:`${fname}`, 
        "industry":industry === undefined || industry === "" ? null :`${industry}`,
        "estimatedAnnualRevenue":estimatedannualrevenue === undefined || estimatedannualrevenue === "" ? null:`${estimatedannualrevenue}`,
        "cwSuiteAccount":dowehaveaccount === undefined || dowehaveaccount === ""? null :dowehaveaccount==="Yes" ? "Y":"N",
        "userQuery":howcanwehelp === undefined || howcanwehelp === "" ? null :`${howcanwehelp}`
    }
    try {
      fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${req.body.secreteKey}&response=${req.body.gRecaptchaToken}`,
      })
        .then((reCaptchaRes) => reCaptchaRes.json())
        .then(async (reCaptchaRes) => {
          if (reCaptchaRes?.score > 0.5) {
            sgMail.setApiKey(process.env.SENDGRID_API_KEY);
            const msg = {
              to:process.env.TO_EMAIL, 
              from:process.env.FROM_EMAIL, 
              subject: `${pageName}: Query sent by ${email}`,
              text:text.trim()
            };
            try {
              await sgMail.send(msg);
              res.status(200).json({
                status: "success",
                message: "Enquiry submitted successfully",
              });
            } catch (error) {
              console.error("Error sending email", error);
              res.status(500).json({
                status: "failure",
                message: "Error sending email",
              });
            }
          } else {
            res.status(200).json({
              status: "failure",
              message: "Google ReCaptcha Failure",
            });
          }
        });
    } catch (err) {
      res.status(405).json({
        status: "failure",
        message: "Error submitting the enquiry form",
      });
    }
  } else {
    res.status(405);
    res.end();
  }
};

export default handler;
  
  