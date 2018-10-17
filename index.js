const dialogflow = require('dialogflow');
const sessionClient = new dialogflow.SessionsClient();

class AldaDialogflow {
  constructor(projectId) {
    this.projectId = projectId;
  }

  fulfillment(query, sessionId) {
    const languageCode = 'es';
    const sessionPath = sessionClient.sessionPath(this.projectId, sessionId);

    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: query,
          languageCode: languageCode,
        },
      },
    };

    return sessionClient.detectIntent(request)
      .then(res => res[0].queryResult.fulfillmentMessages)
  };
}
module.exports = AldaDialogflow
