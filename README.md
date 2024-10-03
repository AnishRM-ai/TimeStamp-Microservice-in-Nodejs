Timestamp Microservice

This project is a Timestamp Microservice built using Node.js and Express.js. The service provides an API endpoint that can return Unix timestamps and UTC date strings for any valid date or Unix timestamp passed to it.
Project Features

    GET /api/:date? - Returns a JSON object containing the Unix timestamp and UTC time corresponding to the provided date or Unix timestamp.
    If no date is provided, it returns the current date and time in both Unix and UTC formats.
    If the input is an invalid date string, the API returns { error: "Invalid Date" }.
