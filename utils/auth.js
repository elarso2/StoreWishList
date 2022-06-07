const withAuth = (req, res, next) => {
<<<<<<< HEAD
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
=======
	if (!req.session.logged_in) {
		res.redirect("/login");
	} else {
		next();
	}
>>>>>>> 0c2fe9c (routes i made)
};

module.exports = withAuth;