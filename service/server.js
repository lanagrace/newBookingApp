var express = require('express');
var app = express();
var mongoose = require('mongoose');
var cors = require('cors');
const Sport = require('./models/Sport.js');
const Court = require('./models/Court.js');
const url = require('url');

var port = 3000;
var dbURL = 'mongodb://localhost:27017/bookingapp';

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use(express.static('www'));

app.get('/', (req, res)=>{
    res.sendFile('index.html');
});

app.post('/addSport', (req,res) => {
    //const lat = req.body.lat;
    const { name } = req.body;
    var sport = new Sport({
       
        name,
    
    }) 
    sport.save();
    console.log('Sport Added');
    
});

app.get('/getSport', (req, res)=>{
    Sport.find({}, (err, docs) =>{
        if (err) throw err;
        res.send(docs);
    })
})



app.post('/addCourt', (req,res) => {
    //const lat = req.body.lat;
    
    const { name, address, lat, lng, w3w, sportId  } = req.body;
    var sport = mongoose.Types.ObjectId(sportId);
    var court = new Court({
       
        name,
        address, 
        lat,
        lng,
        w3w,
        sport

    
    }) 
    court.save();
    console.log('Court Added')
   
});


app.get('/courts/:id', (req, res)=>{
    var id = req.params.id;

    res.redirect(url.format({
        pathname:"/courtPage.html",
        query: {
           "id": id,
         }
      }));; 

});

app.get('/getCourt/:id', (req, res)=>{
    var id = req.params.id;
    if (id === null || id === 'null') {
        res.status(400).send('id not desined bok')
        return;
    }
    Court.find({sport:id}, (err, docs) =>{

        if (err) throw err;
        res.send(docs);
    }); 
});

mongoose.connect(dbURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=>{
    console.log('connected to DB');
}).catch((err)=>{
    console.log(err.message);
});

app.listen(port, ()=>{
    console.log(`Listening on Port ${port}`)
} );