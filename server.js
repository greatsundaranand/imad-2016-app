var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var allhtml = {
    firsthtml : {
    title: 'This is Sundar',
    heading: 'Sundar Speaking',
    content: `<p>
      This is all my first page and I am doing it in IMAD. I am doing my first year Engineering on Electronics & Computer Engineering. You must be wondering what is Electronics & Computer as normally people go with Electronics & Communication. This is a new innovative course that was designed based on Industry latest demands and hence this is predicted to be a best one in future
    </p>

    <p class="mys">
      This is all my first page and I am doing it in IMAD. I am doing my first year Engineering on Electronics & Computer Engineering. You must be wondering what is Electronics & Computer as normally people go with Electronics & Communication. This is a new innovative course that was designed based on Industry latest demands and hence this is predicted to be a best one in future
    </p>
   
    <p>
      This is all my first page and I am doing it in IMAD. I am doing my first year Engineering on Electronics & Computer Engineering. You must be wondering what is Electronics & Computer as normally people go with Electronics & Communication. This is a new innovative course that was designed based on Industry latest demands and hence this is predicted to be a best one in future
    </p>`
    },
    secondhtml : {
    title: 'This is Sanjai',
    heading: 'Sanjai Speaking',
    content: `<p>
      This is all my first page and I am doing it in IMAD. I am doing my first year Engineering on Electronics & Computer Engineering. You must be wondering what is Electronics & Computer as normally people go with Electronics & Communication. This is a new innovative course that was designed based on Industry latest demands and hence this is predicted to be a best one in future
    </p>

    <p class="mys">
      This is all my first page and I am doing it in IMAD. I am doing my first year Engineering on Electronics & Computer Engineering. You must be wondering what is Electronics & Computer as normally people go with Electronics & Communication. This is a new innovative course that was designed based on Industry latest demands and hence this is predicted to be a best one in future
    </p>
   
    <p>
      This is all my first page and I am doing it in IMAD. I am doing my first year Engineering on Electronics & Computer Engineering. You must be wondering what is Electronics & Computer as normally people go with Electronics & Communication. This is a new innovative course that was designed based on Industry latest demands and hence this is predicted to be a best one in future
    </p>`
    },
    thirdhtml : {
    title: 'This is Mummy',
    heading: 'Mummy Speaking',
    content: `<p>
      This is all my first page and I am doing it in IMAD. I am doing my first year Engineering on Electronics & Computer Engineering. You must be wondering what is Electronics & Computer as normally people go with Electronics & Communication. This is a new innovative course that was designed based on Industry latest demands and hence this is predicted to be a best one in future
    </p>

    <p class="mys">
      This is all my first page and I am doing it in IMAD. I am doing my first year Engineering on Electronics & Computer Engineering. You must be wondering what is Electronics & Computer as normally people go with Electronics & Communication. This is a new innovative course that was designed based on Industry latest demands and hence this is predicted to be a best one in future
    </p>
   
    <p>
      This is all my first page and I am doing it in IMAD. I am doing my first year Engineering on Electronics & Computer Engineering. You must be wondering what is Electronics & Computer as normally people go with Electronics & Communication. This is a new innovative course that was designed based on Industry latest demands and hence this is predicted to be a best one in future
    </p>`
    }
};

function createmyhtml (mydata) {
    var htmlstring = `<html>
        <head>
        <title> ${mydata.title} </title>
        </head>
        <body>
        <h1>${mydata.heading}</h1>
        <hr>
        ${mydata.content}
        </body>
        </html>`;
        return htmlstring;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/sundar', function (req, res) {
  res.send(createmyhtml(firsthtml));
});

app.get('/sanjai', function (req, res) {
  res.send(createmyhtml(secondhtml));
});

app.get('/dummy', function (req, res) {
  res.send(createmyhtml(thirdhtml));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
