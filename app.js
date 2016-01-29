var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var users = require('./routes/users');
var app = express();




var games={
          games:[
          {"gamename":"Hextris",
           "genre": "puzzle",
           "link":"http://hextris.github.io/hextris/",
           "imagelink": "" ,
           "timesused": 0,
           "gamediscription": "This game is open-source and is fun to play",
           "howtoplay": "Use your right and left arrow keys to rotate the hexagon. Same coloured titles will be destroyed if more than three are stacked together"
          },

          {"gamename":"The Pond",
           "genre": "puzzle",
           "link":"https://thepond.zolmeister.com",
           "imagelink": "" ,
           "timesused": 0,
           "gamediscription": "This game is open-source and is fun to play",
           "howtoplay": "Use your mouse to direct the organism and eat away the small ones !!"
         },
         {"gamename":"ludum-dare-27",
          "genre": "puzzle",
          "link":"/games/ludum-dare-27/index.html",
          "imagelink": "" ,
          "timesused": 0,
          "gamediscription": "This game is open-source and is fun to play",
          "howtoplay": "Use your left-right and up-down eys to move"
        },
         {"gamename":"Astray",
          "genre": "puzzle",
          "link":"/games/astray/index.html",
          "imagelink": "" ,
          "timesused": 0,
          "gamediscription": "A WebGL maze game built with Three.js and Box2dWeb",
          "howtoplay": "use your up down keys to solve the maze"
        },
        {"gamename":"Branches",
         "genre": "puzzle",
         "link":"/games/polybranch/index.html",
         "imagelink": "" ,
         "timesused": 0,
         "gamediscription": "A WebGL maze game built with Three.js and Box2dWeb",
         "howtoplay": "use your up down keys to solve the maze"
       },
       {"gamename":"Paki",
        "genre": "Adventure",
        "link":"/games/pappu-pakia/index.html",
        "imagelink": "" ,
        "timesused": 0,
        "gamediscription": "This game is inspired brom birds",
        "howtoplay": "Press your left mouse button to move the bird upwards"
      },
       {"gamename":"Matter",
        "genre": "Adventure",
        "link":"http://parsoyaarihant.github.io",
        "imagelink": "" ,
        "timesused": 0,
        "gamediscription": "This is a science fiction games",
        "howtoplay": "use WSAD keys to move the ball. Save the smaller square objects from the lazer and push them into the hole to complete the stage."
      },
      {"gamename":"Ohhi",
       "genre": "Adventure",
       "link":"http://parsoyaarihant.github.io/ohhi",
       "imagelink": "" ,
       "timesused": 0,
       "gamediscription": "This is a puzzle game to Challenge your brain",
       "howtoplay": "Follow the instructions in the game"
      }
        ]
      }


var passport = require('passport');
// This is the file we created in step 2.
// This will configure Passport to use Auth0
var strategy = require('./setup-passport');
// Session and cookies middlewares to keep user logged in
//var cookieParser = require('cookie-parser');
var session = require('express-session');
//app.use(cookieParser());
// See express session docs for information on the options: https://github.com/expressjs/session
app.use(session({ secret: 'YOUR_SECRET_HERE', resave: false,  saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());







// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);





app.get('/callback',
  passport.authenticate('auth0', { failureRedirect: 'https://github.com/parsoyaarihant' }),
  function(req, res) {
    //console.log('arihant');
    if (!req.user) {
      throw new Error('user null');
    }
    //res.redirect("/user");
    res.redirect("/user");
  });
app.get('/user', function (req, res) {
    console.log(req.user._json.picture);
    //console.log(games.games);
    res.render('user', {
      profileimage: req.user._json.picture,
      user: req.user,
      title: req.user._json.name
    });
  });

app.get('/user/hetris', function (req, res) {
      //console.log(req.user._json);
      //console.log(games.games);
      res.render('game', {
        //imageurl: req.picture,
        user: req.user,
        title: req.user._json.name,
        gameurl: games.games[0].link,
        gamename: games.games[0].gamename,
        gamediscription: games.games[0].gamediscription,
        howtoplay: games.games[0].howtoplay
      });
});
app.get('/user/thepond', function (req, res) {
      console.log(req.user._json);
      //console.log(games.games);
      res.render('game', {
        user: req.user,
        title: req.user._json.name,
        gameurl: games.games[1].link,
        gamename: games.games[1].gamename,
        gamediscription: games.games[1].gamediscription,
        howtoplay: games.games[1].howtoplay
      });
});
app.get('/user/ludum-dare-27', function (req, res) {
      console.log(req.user._json);
      //console.log(games.games);
      res.render('game', {
        user: req.user,
        title: req.user._json.name,
        gameurl: games.games[2].link,
        gamename: games.games[2].gamename,
        gamediscription: games.games[2].gamediscription,
        howtoplay: games.games[2].howtoplay
      });
});
app.get('/user/astray', function (req, res) {
      console.log(req.user._json);
      //console.log(games.games);
      res.render('game', {
        user: req.user,
        title: req.user._json.name,
        gameurl: games.games[3].link,
        gamename: games.games[3].gamename,
        gamediscription: games.games[3].gamediscription,
        howtoplay: games.games[3].howtoplay
      });
});
app.get('/user/branches', function (req, res) {
      console.log(req.user._json);
      //console.log(games.games);
      res.render('game', {
        user: req.user,
        title: req.user._json.name,
        gameurl: games.games[4].link,
        gamename: games.games[4].gamename,
        gamediscription: games.games[4].gamediscription,
        howtoplay: games.games[4].howtoplay
      });
});
app.get('/user/paki', function (req, res) {
      console.log(req.user._json);
      //console.log(games.games);
      res.render('game', {
        user: req.user,
        title: req.user._json.name,
        gameurl: games.games[5].link,
        gamename: games.games[5].gamename,
        gamediscription: games.games[5].gamediscription,
        howtoplay: games.games[5].howtoplay
      });
});
app.get('/user/matter', function (req, res) {
      console.log(req.user._json);
      //console.log(games.games);
      res.render('game', {
        user: req.user,
        title: req.user._json.name,
        gameurl: games.games[6].link,
        gamename: games.games[6].gamename,
        gamediscription: games.games[6].gamediscription,
        howtoplay: games.games[6].howtoplay
      });
});
app.get('/user/ohhi', function (req, res) {
      console.log(req.user._json);
      //console.log(games.games);
      res.render('game', {
        user: req.user,
        title: req.user._json.name,
        gameurl: games.games[7].link,
        gamename: games.games[7].gamename,
        gamediscription: games.games[7].gamediscription,
        howtoplay: games.games[7].howtoplay
      });
});










// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
