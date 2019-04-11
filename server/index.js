const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('vew engine', 'hbs');
app.set('views', path.join(__dirname, '../templates/views'));
hbs.registerPartials(path.join(__dirname, '../templates/partials'));

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req,res) => {
  res.send('yes');
})

app.listen((PORT) => console.log(`server is listening on ${PORT}`));