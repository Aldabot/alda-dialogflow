'use strict';
const dialogflow = require('dialogflow');
const sessionClient = new dialogflow.SessionsClient();

const projectId = 'alda-57116';

const fulfillment = async (event, context) => {
  const { query, sessionId } = JSON.parse(event.body)
  if(!query || !sessionId)
    return {
      statusCode: 500,
      body: 'query or sessionId not set'
    }
  const languageCode = 'es';

  const sessionPath = sessionClient.sessionPath(projectId, sessionId);

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: query,
        languageCode: languageCode,
      },
    },
  };

  try {
    const responses = await sessionClient.detectIntent(request)
    const fulfillmentMessages = responses[0].queryResult.fulfillmentMessages
    return {
      statusCode: 200,
      body: JSON.stringify({ fulfillmentMessages })
    }
  }
  catch(err) {
    return {
      statusCode: 500,
      body: JSON.stringify(err),
    };
  }
};

module.exports = fulfillment
