const { validationResult } = require("express-validator");

module.exports = {
  index: (req, res) => {
    return res.render("index");
  },
  welcome: (req, res) => {
    let errors = validationResult(req);
   
    if (errors.isEmpty()) {
      const { name, email, color, age, recordar } = req.body;
      req.session.bgColor = color;
      res.locals.bgColor = req.session.bgColor;

      if (recordar) {
        res.cookie("bgColor", req.session.bgColor, {
          maxAge: 1000 * 60
        });
      }
      return res.render("index", {
        name,
        email,
        color,
        age,
      });
    } else {
      res.render("index", {
        old: req.body,
        errors: errors.mapped(),
      });
    }
  },

logout: (req, res) => {
    res.render('logout')
},
destroy: (req, res) => {
    req.session.destroy();
    res.cookie('bgColor', null, {maxAge: -1})
    res.redirect('/')
}

};
