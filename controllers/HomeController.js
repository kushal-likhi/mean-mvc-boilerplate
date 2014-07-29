/**
 * Home Controller
 *
 * Handles the routes responsible for public facing pages (non-logged in pages)
 *
 * */

/**
 * Handles the route which renders the home page
 * @url "/"
 * */
exports.index = function (req, res) {
    //explicitly check for logged in user in the non secured route.
    req.user = req.checkLoggedIn();
    if (req.user) res.redirect("/dashboard");
    else res.render('index', {error: null});
};