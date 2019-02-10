'use strict';
require('dotenv').config()
const dialogflow = require('dialogflow');

// Create a new session
const sessionClient = new dialogflow.SessionsClient();

const fulfillment = (text, sessionId) => {
  const sessionPath = sessionClient.sessionPath(process.env.GCLOUD_PROJECT_ID, sessionId);

  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text,
        languageCode: 'es',
      },
    },
  };

  // Send request and log result
  return sessionClient.detectIntent(request);
}

module.exports = fulfillment
