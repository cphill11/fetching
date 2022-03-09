// fxn acts as a normal request check-back fxn, checks for existence of session property & then populates it w/ the fxn
const withAuth = (req, res, next) => {
    if (!req.session.loggedIn) {
      res.redirect('/login');
    } else {
      next();
    }
  };


  
  module.exports = withAuth;