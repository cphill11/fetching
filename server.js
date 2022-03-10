const express = require('express');
const session = require('express-session');
// // for multer-storage-cloudinary
// const cloudinary = require("cloudinary").v2;
// const { CloudinaryStorage } = require("multer-storage-cloudinary"),
// const multer = require("multer");

const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const helpers = require('./utils/helper');

const app = express();

// // for multer-storage-cloudinary
// cloudinary.config({
//     cloud_name: "dkzs0mf5p",
//     api_key: "594763671876296",
//     api_secret: "q4vV10wlqy5ba_v0Z8Zm8OOegA8",
// });

// const storage = new CloudinaryStorage({
//     cloudinary: cloudinary,
//     params: {
//       folder: "DEV",
//     },
//   });

// const upload = multer({ storage: storage });


// app.get("/", (req, res) => {
//     return res.json({ message: "hello world"});
// });

// app.post("/", upload.single("picture"), async (req, res) => {
//     return res.json({ picture: req.file.path });
// });
  
// const start = (port) => {
//     try {
//         app.listen(port, () => {
//         console.log(`Api up and running at: http://localhost:${port}`);
//       });
//     } catch (error) {
//       console.error(error);
//       process.exit();
//     }
// };
// start(3333);

const PORT = process.env.PORT || 3001;

//setting up session for login storage
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
    secret: 'This is a Secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
}

app.use(session(sess))

const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//turn on routes
app.use(routes);

//turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
})
