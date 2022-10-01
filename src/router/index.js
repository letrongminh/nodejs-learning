const newsRouter = require('./news')

function routes(app) {
    app.get('/', (req, res) => {
        res.render('home');
    });
     
    //app.get('/news', (req, res) => {
    //  res.render('news');
    //});
    
    app.use('/news', newsRouter);


    app.get('/search', (req, res) => {
      res.render('search');
    });
    
    app.post('/search', (req, res) => {
      res.send('-----');
    });
    

}

module.exports = routes;