const db = require('../data/connection');
const query = require('../data/sqlqueries');
const express = require('express');
const app = express();
const router = express.Router();

router.get('/', (req, res) => 
{
    db.connection.connect(db.details, (error) => 
    {
        if (error)
        {
            console.log(error);
        }
        else
        {
            console.log('connected....');
        }
    
        const request = new db.connection.Request();
        request.query(query.selectUsers, (error, recordset) => 
        {
            if (error)
            {
                console.log(error);
            }
            db.connection.close();
            console.log(recordset.recordset);
            res.render('home', {data: recordset.recordset});
        });
    
    });
});
module.exports = {'app':app, 'router':router, 'express':express};