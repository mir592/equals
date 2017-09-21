module.exports = {
  index: (req, res, next) => {
    res.render('index' , { user: res.user });

  },
  secret: (req, res, next) => {
    res.render('secret', { user: res.user });
  }

};
