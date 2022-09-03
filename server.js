const express = require('express');
const cors = require('cors');
const bp = require('body-parser')

const sql = require("msnodesqlv8");

const connectionsString = "server=.;Database=DBTC404;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";



const app=express();

app.use(cors());
//app.use(express.json());
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.listen(3333);


const routes = {
    deity : "/deity"
};

app.post(`${routes.deity}`, function (req, res) {
    console.log(req.body);
    res.status(201).send(req.body);
});
app.put(`${routes.deity}`, function (req, res) {
    let id = req.params.id;
    res.status(201).send(`Rota PUT com ID! --> ${id}`);
});

app.delete(`${routes.deity}:id`, function (req, res) {
    let id = req.params.id;
    res.status(200).send(`Rota DELETE com ID! --> ${id}`);
});
app.get(`${routes.deity}`, function (req, res){
    sql.query(connectionsString, "select * from TB_DEITY", (err, rows) => {
        console.log(rows);
        res.status(200).send(rows);
    })

});


