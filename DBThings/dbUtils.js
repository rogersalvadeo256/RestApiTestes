const sql = require("msnodesqlv8");

const connectionsString = "server=.;Database=DBTC404;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";

sql.query(connectionsString,"select * from TB_DEITY",(err,rows)=>{
  console.log(rows);
})