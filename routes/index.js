
/*
 * GET home page.
 */

module.exports= function (app){

  app.all('*', function (req, res, next) {
  	res.locals.title = 'AppName';
  	next();
  });

  app.get('/', function (req, res){
      res.render('index.html');
  });
};
