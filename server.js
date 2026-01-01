const express = require('express');
const app = express();
const musicRouter = require('./routes/music');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static('public'));
app.use('/music', musicRouter);

app.get('/', (req, res) => res.redirect('/music'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server started'));
