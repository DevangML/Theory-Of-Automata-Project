//Importing express module in server
const express = require('express');

//Creating an instance of express to route API calls
const app = express();
//Serving the static files present in "src" folder
app.use(express.static('assets'));

//Defining Port number
const PORT = 5050;

//Redirecting the default GET api to landing html file
app.get('/', (req, res) => {
  res.redirect('/index.html');
});

//Redirecting the default GET api to landing html file
app.get('/module1', (req, res) => {
  res.redirect('/module1.html');
});

//Redirecting the default GET api to landing html file
app.get('/module2', (req, res) => {
  res.redirect('/module2.html');
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));
