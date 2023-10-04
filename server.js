const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage':{
        'age':29,
        'birthName':'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England' 
    },
    'chance the rapper':{
        'age':29,
        'birthName':'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois' 
    },
    'lil dicky':{
        'age':29,
        'birthName':'Dave Burd',
        'birthLocation': 'Sherman Oaks, California' 
    },
    'Not A Rapper':{
        'age':0,
        'birthName':'Nameless',
        'birthLocation': 'No Where, California' 
    },    

}



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (req, res) =>{
    const rappersName = req.params.rapperName.toLowerCase()
    if(rappers[rappersName]){
        res.json(rappers[rappersName])
        
    }else{
        res.json(rappers['Not A Rapper'])
    }

    // res.json(rappers)
})

app.get('/js/main.js', (req, res) => {
    res.set('Content-Type', 'text/javascript');
    res.sendFile(__dirname + '/js/main.js')
});

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}!`)
})