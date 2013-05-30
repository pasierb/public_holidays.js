public_holidays.js
==================

Public holidays generator.

Usage
-----

set country/region
```
  PublicHolidays.setFactory('pl')
```

get public holidays for given year
```
  PublicHolidays.all()      //for current year
  PublicHolidays.all(2014)  //for 2014
```

Development
-----------

You need node.js for development, use CoffeScript for coding, `grunt` for building.

Contribute
----------

Adding factories is dead simple, take a look at others and write your own.
Use shipped in [date.js](https://code.google.com/p/datejs/) for easy date manipulation/calculation.
