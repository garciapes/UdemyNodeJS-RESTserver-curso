//========================
//   Puerto
//========================
process.env.PORT = process.env.PORT || 3000;

//========================
//   Entorno
//========================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//========================
//   Base de Datos
//========================
let urlDB;

if (process.env.NODE_ENV = 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
//    urlDB = 'mongodb://cafe-user:cafe1315@ds231568.mlab.com:31568/cafe';
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;

