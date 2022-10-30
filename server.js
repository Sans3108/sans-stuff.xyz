const express = require('express');

const app = express();

app.set('view engine', 'ejs');

const PORT = 3001;

app.get('/', (req, res) => {
  res.render('index');
});

app.use(express.static('./public'));

app.use((req, res) => {
  res.status(404);

  if (req.accepts('html')) {
    res.render('404', { url: req.url });
    return;
  }

  if (req.accepts('json')) {
    res.json({ error: 'Not found' });
    return;
  }

  res.type('txt').send('Not found');
});

app.listen(PORT, err => {
  if (err) console.error(err);
  console.log(`Server listening on port ${PORT}`);
});
