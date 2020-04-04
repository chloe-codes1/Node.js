module.exports = function(app){

    app.get('/', function(request, response){
        response.render('index.html')
    });

    app.get('/about', function(request, response){
        response.render('about.html')
    });
}
