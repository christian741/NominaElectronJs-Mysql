/* Requerir Mysq Promise */
const mysql =require('promise-mysql')

/**
 * [createConnection Se encarga de crear Conexion a Base de Datos]
 *
 * @return  {[mysql]}  [return si se crea la conexion]
 */
const connection = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password : '',
    database: 'nominaDB'
})
/**
 * [getConnection this function return the connection to the Data Base]
 *
 * @return  {[type]}  [return description]
 */
function getConnection(){
    return connection; 
}

module.exports = {getConnection}