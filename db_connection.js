const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'martha',
    database: 'student_id',
    port: 3000
});

db.connect(err => {
    if (err){
      throw err;
    }else{
        console.log('Connected to MYSQL database');  
    }
    
});
module.exports = db;