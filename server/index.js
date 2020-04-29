//NPM Libraries
const express = require('express');
const exphbs = require('express-handlebars');

// Modules
const path = require('path');
const fs = require('fs');

// Our files
const routes = require('./routes');
const { images } = require('./db/db.js');

// Instantiate app and create PORT variable
const PORT = process.env.PORT || 3000;
const app = express();

// Set handlebars as our engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Body parsing middleware
app.use(express.json());

// Send public directory
app.use(express.static(path.join(__dirname, '..', 'public')));

// Register routes with app
app.use(routes);

// Start server and callback function to let us know its started
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
