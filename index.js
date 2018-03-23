const express = require('express');
const app = express();

function doWork(duration) {
    const start = Date.now();
    while(Date.now() - start < duration) {        
    }
}

app.get('/',(req,res) => {
    // This happens in event loop. It cannot do anything at all when this happens
    doWork(5000);
    res.send('Hi there!');
});

app.listen(3000);