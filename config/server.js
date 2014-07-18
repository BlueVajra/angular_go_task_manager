/* Define custom server-side HTTP routes for lineman's development server
 *   These might be as simple as stubbing a little JSON to
 *   facilitate development of code that interacts with an HTTP service
 *   (presumably, mirroring one that will be reachable in a live environment).
 *
 * It's important to remember that any custom endpoints defined here
 *   will only be available in development, as lineman only builds
 *   static assets, it can't run server-side code.
 *
 * This file can be very useful for rapid prototyping or even organically
 *   defining a spec based on the needs of the client code that emerge.
 *
 */

module.exports = {
  drawRoutes: function(app) {
    app.post('/api/login', function(req, res) {
      res.json({ message: 'logging in!' });
    });

    app.post('/api/logout', function(req, res) {
      res.json({ message: 'logging out!'});
    });

//    app.use('/api/tasks', function (req, res){
//        var r = req.params[0];
//        console.log(r);
//        req.pipe(request('http://localhost:8080/api/tasks')).pipe(res);
//    });

//    app.use('/api/(.+)', function (req, res){
//        var r = req.params[0];
//        console.log(r);
//        req.pipe(request('http://localhost:8080/' + r)).pipe(res);
//    });

//    app.post('/task/new', function(req, res) {
//          res.json({name: 'New Task', description: 'New Task Description'});
//        });

//    app.get('/api/tasks', function (req, res) {
//      res.json([
//        {name: 'Wash Dishes', description: 'Duh'},
//        {name: 'Do Laundry', description: 'wash in cold...'},
//        {name: 'Buy Eggs', description: 'the cruelty-free kind'}
//      ]);
//    });
  }
};

//var request = require('request');
