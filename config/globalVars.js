// global variables for the application
module.exports =
{
  db: 'mongodb://assignment2:assignment2@ds151927.mlab.com:51927/comp2068-assignment2',
  secret: 'UseThis to create Salt 123',
  ids:
  {
    facebook:
    {
      clientID: '636876689830936',
      clientSecret: '6768591c5f28f63a85749657f0ce132b',
      callbackURL: 'http://localhost:3000/facebook/callback'
    },
    github:
    {
      clientID: 'aadb1f681072a75a8f1a',
      clientSecret: '95f1aab7fd8383d8d2c6e3707d9f8bec30aae0a6',
      callbackURL: 'http://localhost:3000/github/callback'
    }
  }
};
