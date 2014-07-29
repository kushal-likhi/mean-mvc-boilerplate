/**
 * URL Mappings are done in this file.
 *
 * "_app" is the express app object. Rest is all express.
 * */

//Require Controllers
var controllers = {
    cluster: require("../controllers/ClusterController"),
    user: require("../controllers/UserController"),
    home: require("../controllers/HomeController")
};


//Cluster API
_app.get("/cluster/worker/list", controllers.cluster.list);

//Home/Auth URL Mappings
_app.get('/', controllers.home.index);

//User routes
_app.post('/', controllers.user.loginHandler);
_app.get('/logout', controllers.user.logout);
