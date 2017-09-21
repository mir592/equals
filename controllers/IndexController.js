module.exports = {
  index: (req, res, next) => {
    res.render('index' , { user: res.locals.user });

  },
  secret: (req, res, next) => {
    res.render('secret', { user: res.locals.user });
  }

};
