// global variables for the application
module.exports = {
  //db: 'mongodb://localhost/comp2068-thu'
  db: 'mongodb://whatif_85_2:mypassword@ds048319.mlab.com:56698/comp2068-lesson6',
  //db:<dbuser>:<dbpassword>@ds056698.mlab.com:56698/comp2068-lesson6
  secret: 'UseThis to create Salt 123',
  ids:
  {
    facebook:
    {
      clientID: '718465424974343',
      clientSecret: '5ebb5c1699ff98a1f910ee06d3f58d0a',
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
