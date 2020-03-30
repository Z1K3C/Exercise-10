//Inicializo mi servidor usando express
const express = require('express');                     //Solicito Express
const app = express();                                  //Instancio a Express
const path = require('path');
const DBconnection = require('./database.js');    //Instancio a database.js para usar sus metodos

//Settings
app.set('port',process.env.PORT || 3000);               //Declaro una variable con el numero del puerto
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

//Middlewares
app.use(express.json());                                //Uso el middleware para interpretar JSONs

//Routes
app.get('/', function(req1, res1){

   DBconnection.query("SELECT * FROM [EXAMPLE].[dbo].[TABLE_0]",   //Genero el query...
   function(err2,res2){                            //y despues ejecuto una funcion
      if(err2){                                     //Si hay un error lo imprime en pantalla
         console.log(err2);
         throw err2;
      }
      else{                                         //Si no hay error...
         console.log('Data send to static file');
         res1.render('index.ejs',{
            TABLE_0 : res2.recordset
         });
      }
   });
});

//Starting server
app.listen(app.get('port'), function(){
    console.log(`Server on port ${app.get('port')}`);     //Imprimo en pantalla el status del servidor
});