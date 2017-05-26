
# ![apish_api](public/ape.svg) Apish API

[![Build Status](https://travis-ci.org/anthonkendel/opendata-api.svg?branch=master)](https://travis-ci.org/anthonkendel/opendata-api) [![Dependencies Status](https://david-dm.org/anthonkendel/opendata-api.svg)](https://github.com/anthonkendel/opendata-api/blob/master/package.json) [![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://en.wikipedia.org/wiki/MIT_License) [![Heroku](https://img.shields.io/badge/available-heroku-7565C7.svg)](https://odata-api.herokuapp.com/api/v1)

## Apish API provides an open and free API to use with any application.

--------------------------------------------------------------------------------

Apish API uses the following libraries for generating data and formatting:

- [Faker.js](https://github.com/marak/Faker.js/)
- [dateformat](https://www.npmjs.com/package/dateformat)

### Endpoints

**Dates:** `/api/v1/dates/`<br>

_Query parameters:_<br>
```
type - [past, present, future]
format - [shortDate, mediumDate, longDate, fullDate, shortTime, mediumTime, longTime, isoDate, isoTime, isoDateTime, isoUtcDateTime]
```
_Notes:_<br>
format - can be set with a custom date format string with the help of [dateformat](https://www.npmjs.com/package/dateformat).
