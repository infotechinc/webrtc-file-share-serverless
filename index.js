const twilio = require("twilio");

exports.handler = async event => {
  const client = twilio(
    process.env.twilioAccountSid,
    process.env.twilioAuthToken
  );
  const token = await client.api
    .accounts(process.env.twilioAccountSid)
    .tokens.create({});
  return {
    statusCode: "200",
    body: JSON.stringify({ iceServers: token.iceServers }),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  };
};
