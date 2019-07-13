const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req,res) => {
  res.render('index');
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server is listening on ${PORT}`));