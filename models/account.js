var mongoose = require('mongoose');

// reference passport-local-mongoose so passport can use this model for user authentication
var plm = require('passport-local-mongoose');

// define the user Schema
var AccountSchema = new mongoose.Schema(
  {
    // username: String
    oauthID: String,
    created: Date
  }
);

// used for configuring options - do we need this???
AccountSchema.plugin(plm);

// make it public
module.exports = mongoose.model('Account', AccountSchema);
