![apish_api](./public/ape.png)
#  Apish API

[![Build Status](https://travis-ci.org/anthonkendel/apish_api.svg?branch=master)](https://travis-ci.org/anthonkendel/apish_api) [![Dependencies Status](https://david-dm.org/anthonkendel/opendata-api.svg)](https://github.com/anthonkendel/opendata-api/blob/master/package.json) [![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://en.wikipedia.org/wiki/MIT_License) [![Heroku](https://img.shields.io/badge/available-heroku-7565C7.svg)](https://odata-api.herokuapp.com/api/v1)

## Apish API provides an open and free API to use with any application.

--------------------------------------------------------------------------------

Apish API uses the following libraries for generating data and formatting:

- [Faker.js](https://github.com/marak/Faker.js/)
- [dateformat](https://www.npmjs.com/package/dateformat)

### Endpoints

**Dates:**  
`GET /api/v1/dates/`  

_Query parameters:_  
```
type - [past, present, future]
format - [shortDate, mediumDate, longDate, fullDate, shortTime, mediumTime, longTime, isoDate, isoTime, isoDateTime, isoUtcDateTime]
```
_Notes:_  
format - can be set with a custom date format string with the help of [dateformat](https://www.npmjs.com/package/dateformat).

`POST /api/v1/dates/`

_Body parameters:_  
```
year: number
month: number
day: number
```

_Query parameters:_  
```
format - [shortDate, mediumDate, longDate, fullDate, shortTime, mediumTime, longTime, isoDate, isoTime, isoDateTime, isoUtcDateTime]
```
