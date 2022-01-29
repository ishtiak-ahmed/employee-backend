module.exports = {
  HOST: "localhost",
  USER: "root", // db user name
  PASSWORD: "password", // db  password
  DB: "employe_server", // db name
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};