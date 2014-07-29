/**
 * Home Controller
 *
 * Handles the routes responsible for public facing pages (non-logged in pages)
 *
 * */

var EventName = require("../src/enum/EventName");

/**
 * Handles the route which renders the dashboard page
 * @url "/"
 * */
exports.dashboard = function (req, res) {
    res.render("dashboard", {});
}.secured();

/**
 * Handles the login form submission
 * @url "/"
 * */
exports.loginHandler = function (req, res) {
    req.assert('username', 'Please Enter the Username.').notEmpty();
    req.assert('password', 'Please enter a password.').notEmpty();

    //Check for errors
    var errors = req.validationErrors();
    if (Boolean(errors)) {
        res.render('index', {error: errors.reduce(function (pre, curr) {
            pre.push(curr.msg);
            return pre;
        }, [])});
        return;
    }

    AuthService.authenticate(req.param("username"), req.param("password"))
        .on(EventName.DONE, function (user) {
            res.loginUser(user._id, user.name, user.roles);
            res.redirect("/");
        })
        .on(EventName.ERROR, function (err) {
            log.error(err);
            res.render('index', {error: ["Some error occurred. Try again later."]});
        })
        .on(EventName.NOT_FOUND, function () {
            res.render('index', {error: ["Invalid Username or Password!"]});
        });
};

/**
 * Handles the logout route
 * @url "/logout"
 * */
exports.logout = function (req, res) {
    res.logoutUser();
    res.redirect("/");
};
