PublicHolidays.registerFactory 'at',
  holidays: (year) ->
    [
      PublicHolidays.newYear(year)
      new PublicHolidays.Day (Date.today()).set({ day: 6, month: 0, year: year }), "three_kings"
      new PublicHolidays.Day PublicHolidays.easter(year).date.add({ days: 1 }), "easter_monday"
      new PublicHolidays.Day (Date.today()).set({ month: 4, day: 1, year: year }), "labour_day"
      new PublicHolidays.Day PublicHolidays.easter(year).date.add({ days: 39 }), "feast_of_the_ascension"
      new PublicHolidays.Day PublicHolidays.easter(year).date.add({ days: 48 }), "pentecost"
      new PublicHolidays.Day PublicHolidays.easter(year).date.add({ days: 60 }), "corpus_christi"
      new PublicHolidays.Day (Date.today()).set({ month: 7, day: 15, year: year }), "maria"
      new PublicHolidays.Day (Date.today()).set({ month: 9, day: 26, year: year }), "austrian_national_day"
      new PublicHolidays.Day (Date.today()).set({ month: 10, day: 1, year: year }), "all_saints"
      new PublicHolidays.Day (Date.today()).set({ month: 11, day: 8, year: year }), "immaculate_conception"
      new PublicHolidays.Day (Date.today()).set({ month: 11, day: 25, year: year }), "christmas"
      new PublicHolidays.Day (Date.today()).set({ month: 11, day: 26, year: year }), "st_stephen"
    ]
