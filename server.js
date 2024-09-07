const express = require('express');
const app = express();
const port = 3001;


const loggerMiddleware = (req, res, next) => {
    const startTime = Date.now();

   
    console.log(`Name: Neeraj | Method: ${req.method} | URL: ${req.url} | Timestamp: ${new Date().toISOString()}`);

    res.on('finish', () => {
        const endTime = Date.now();
        const timeTaken = endTime - startTime;
        console.log(`Request processed in ${timeTaken}ms`);
    });

    next();
};

app.use(loggerMiddleware);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
