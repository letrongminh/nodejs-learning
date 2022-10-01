
class NewsController{
    //[GET]/news
    index(req, res) {
        res.render('news');
    }

    militaryNews(req, res) {
        res.send('Military News')
    }
}

module.exports = new NewsController;