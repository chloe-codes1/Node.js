module.exports = function(app,fs){

    app.get('/', function(request, response) {
        response.render('index', {
            title: "MY HOMEPAGE",
            length: 5
        })
    });
}
