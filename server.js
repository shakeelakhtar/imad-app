var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var Articles {
  var 'article-one':{
  title:'Article one | shakeel',
  heading:' article one',
  date:'august 10',
  content:` <p>
        wanna tell you a poem
    </p>
    <p>
          At a dead mans throat

         lies the rain drenched woolen scarf

          that stifled his screams.

         Cold Winds howl through decayed trees -

         witnesses in the shadows.
    </p>`,
  },
    var 'article-three' :{
      title:'Article Three | shakeel',
  heading:' article Three',
  date:'august 10',
  content:` 
    <p>
        wanna tell you a poem
    </p>
       <p>
          At a dead mans throat

         lies the rain drenched woolen scarf

          that stifled his screams.

         Cold Winds howl through decayed trees -

         witnesses in the shadows.
    </p>`,
    },

};
    
function createTemplate(data)
{
  var title=data.title;
  var heading=data.heading;
  var date=data.date;
  var content=data.content;
  
var htmlTemplate =
    `<html>
<head>
${title}
<link href="/ui/style.css" rel="stylesheet" />
</head>
<body>
    <div class=" container">
<div>
    <a href="/">home</a>
</div>
<hr/>
<h3>
   ${heading}
</h3>
    <div>
    ${date}
    </div>
<div>
    
    ${content}
</div>
</div>
</body>
</html>
`;
  return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function(req,res)
{
    res.send(createTemplate(Articles[articleName]));
});

app.get('/second_article', function(req,res)
{
     res.sendFile(path.join(__dirname,'ui','second_article.html'));
});

app.get('/third_one', function(req,res)
{
    res.sendFile(path.join(__dirname,'ui','third_one.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
