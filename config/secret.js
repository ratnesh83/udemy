module.exports = {
    database: 'mongodb://root:abc123@ds153835.mlab.com:53835/codedemy',
    port: 3000,  
    secretKey: 'Arash1293123123',
    facebook: {
        clientID: '180721565975967',
        clientSecret: 'd7817fd006a935828d85530cc2e82a20',
        profileFields: ['emails', 'displayName'],
        callbackURL: 'http://localhost:3000/auth/facebook/callback',
        passReqToCallback: true,
      }
  }
  