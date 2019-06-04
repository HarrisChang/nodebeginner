const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '******',
    database: 'harrisTest'
})

connection.connect();

// const sql = 'SELECT id,name from test'
// const sql = `INSERT INTO test (name, age) VALUES ('zhangsan', '16')`
// const sql = "UPDATE `harrisTest`.`test` SET `name` = 'zhangsan', `age` = 27 WHERE `id` = 2;"
const sql = "DELETE FROM `harrisTest`.`test` WHERE `id` = 2"

connection.query(sql, (error, results) => {
    if(error){
        console.error(error)
        throw error
    }
    console.log('The solution is: ', results)
})

connection.end();