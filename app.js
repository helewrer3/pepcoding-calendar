const express = require('express');
const app = express();
const router = require('./routes/api');
const {db} = require('./db/models');

app.use(express.static('./public'));
app.use(express.json());
app.use('/api', router);

db.sync({force: true})
.then(() => {
    const port = process.env.PORT || 5000;
    app.listen(port, () => console.log(port));
})
.catch((err) =>{
    console.error(err);
})