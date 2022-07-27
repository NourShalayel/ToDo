const config = require('./config')
const sql = require('mssql/msnodesqlv8')

sql.on('error' , err=>{
    console.log(err.message);
})

async function getDB(){
    try{
       let pool = await sql.connect(config)
       let result = await pool.request().query('select * from tasks')
    //    console.log(result.recordset[0])
       return result.recordset ;
       sql.close()
    }catch(err){
      console.log(err.message)
      sql.close()
    }
}

getDB()
// sql.connect(config).then(pool =>{
//     return pool.request().input("id" , sql.Int , 1).query('select * from tasks where id = @id');
// }).then(result =>{
//     console.log(result.recordset[0])
// }).catch((err)=>{
//     console.log(err.message)
//     sql.close
// })

module.exports = {
    getDB :getDB
}