const AldaDialogflow = require('../index.js')
const client = new AldaDialogflow('---')

module.exports.hello = async (event, context) => {
  const { query, sessionId } = event.body
  // const { query, sessionId } = JSON.parse(event.body)
  if(!query || !sessionId)
    return {
      statusCode: 500,
      body: 'query or sessionId not set'
    }
  try {
    const msg = await client.fulfillment(query, sessionId)
    return {
      statusCode: 200,
      body: JSON.stringify(msg),
    };
  } catch(err) {
    return {
      statusCode: 500,
      body: JSON.stringify(err),
    };
  }
};
