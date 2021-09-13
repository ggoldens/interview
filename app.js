// Credentials
const apiKey = '';
const sessionId = '';
const token = '';

// Init to the session
const session = OT.initSession(apiKey, sessionId);

// Create the publisher
const pub = OT.initPublisher('publisher', { insertMode: 'append' });

// Connect to the session
session.connect(token, (error) => {
  if (error) {
    console.log(error.message);
  }
});

// Publish to the session
session.publish(pub);

// Subscribe participants.
session.on('streamCreated', (event) => {
  session.subscribe(stream, 'subscribers', {
    insertMode: 'append'
  });
});