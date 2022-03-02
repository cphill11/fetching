const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
// const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 3001;

const routes = require("./controllers");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// // implement helpers from test fxns
// const helpers = require('./utils/helpers');
// const hbs = exphbs.create({ helpers });

// connects to handlebar template; handlebar template lives in view/layouts/main.handlebars
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// turn on routes
app.use(routes);

// establish connection to db & server, then turn it on
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
