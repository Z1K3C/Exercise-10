//Aqui se encuentra el metodo de conexion a la base de datos

const mssql = require('mssql');                           //solicito mssql desde node_modules
const dbconfig = {                                        //declaro un arreglo con la informacion de la conexion a la base de datos
  server: "localhost",
  user: "sa",
  password: "otrogato",
  database: "EXAMPLE",
  port: 1433,
  options: {
    encrypt: false
  }
};

var conn = new mssql.ConnectionPool(dbconfig);            //Genero una nueva conexion
conn.connect(function(err){                               //USando el metodo connect realizo el enlace
  if(err){
    console.log(err);                                     //Si recibo un error lo imprimo en consola
    return;
  }else{
    console.log("Database 'EXAMPLE' connect")   //Si no hay error imprimo enlace realizado
  }
});

module.exports = conn;                               //exporto todos los metodos almacenados en usermodel
