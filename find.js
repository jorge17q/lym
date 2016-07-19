//1. rescatando el argumento que es pasado al Script
var ageArgument = +process.argv[2];

//Conectarnos a la base de datos
//Paso 1. Cargar el driver en nuestro script
var mongodb =require('mongodb');
//Paso 2. El driver de mongodb nos proporciona un cliente, por lo que lo extremos de la libreria
var mongoClient = mongodb.MongoClient;
//Paso 3. Conectamos el cliente con la base de datos
mongoClient.connect("mongodb://127.0.0.1:27017/learnyoumongo", function (err, db){
    //Verificando si hubo un error en la conexion
    if(err){
        console.log("> Error al conectar a: "+ 'mongodb://127.0.0.1:27017/learnyoumongo');
        throw err;
    }
    //Obteniendo la coleccion
    var parrotsCollection = db.collection('parrots');
    //Aplicando un query sobre la coleccion
    var objetoResultado = parrotsCollection.find({
            age : {$gt : ageArgument}
        });
        //
        objetoResultado.toArray(function(err, docs){
            console.log(docs);
            //Cerrando la conexion
            db.close();
        })
});