const cluster = require('cluster');

if (cluster.isMaster) {
    // cause index.js to be executed again, but in child mode
    cluster.fork();
    cluster.fork();
    cluster.fork();
}
else {
    // I am a child. I am going to act normal 
    const express = require('express');
    const app = express();

    function doWork(duration) {
        const start = Date.now();
        while (Date.now() - start < duration) {
        }
    }

    app.get('/', (req, res) => {
        // This happens in event loop. It cannot do anything at all when this happens
        doWork(5000);
        res.send('Hi there!');
    });

    app.get('/fast', (req, res) => {
        res.send('This was fast');
    });


    app.listen(3000);
}
