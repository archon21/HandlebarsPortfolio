const express = require('express');
const exphbs = require('express-handlebars');

const routes = require('./routes');

const PORT = process.env.PORT || 3000
const app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.json());


app.use(routes);

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
