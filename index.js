const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({optionsSuccessStatus: 200}));

app.get("/", (req, res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

// API route to handle the timestamp microservice
app.get('/api/:date?', (req, res) => {
    let dateInput = req.params.date;

    // If no date is provided, return current date in unix and UTC
    if (!dateInput) {
        const currentDate = new Date();
        return res.json({
            unix: currentDate.getTime(),
            utc: currentDate.toUTCString(),
        });
    }

    // If the date input is a valid number (Unix timestamp)
    if (/^\d+$/.test(dateInput)) {
        dateInput = parseInt(dateInput);  // convert to an integer

        const date = new Date(dateInput);
        if (date.toString() === 'Invalid Date') {
            return res.json({ error: "Invalid Date" });
        }

        return res.json({
            unix: date.getTime(),
            utc: date.toUTCString(),
        });
    }

    // If the date input is a valid ISO string (e.g.'2015-12-25')
    const date = new Date(dateInput);
    if (date.toString() === 'Invalid Date') {
        return res.json({ error: "Invalid Date" });
    }

    return res.json({
        unix: date.getTime(),
        utc: date.toUTCString(),
    });
});

// Listen to a port
let listener = app.listen(process.env.PORT || 3000, () => {
    console.log('App is listening on port ' + listener.address().port);
});
