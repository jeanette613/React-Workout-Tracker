//connect to database
require('dotenv').config();
require('./config/database');


// Require the Mongoose models
// const User = require('./models/user');
// const Item = require('./models/exercise');
// const Category = require('./models/category');
// const Order = require('./models/entry');

// Local variables will come in handy for holding retrieved documents
let user, exercise, category, entry;
let users, exercises, catgories, entries;