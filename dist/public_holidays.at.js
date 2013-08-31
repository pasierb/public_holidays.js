PublicHolidays.registerFactory('at', {
  holidays: function(year) {
    var context;

    context = Date.today().set({
      year: year
    });
    return [
      PublicHolidays.newYear(year), new PublicHolidays.Day(context.set({
        day: 6,
        month: 0
      }), "three_kings"), new PublicHolidays.Day(PublicHolidays.easter(year).date.add({
        days: 1
      }), "easter_monday"), new PublicHolidays.Day(context.set({
        month: 4,
        day: 1
      }), "labour_day"), new PublicHolidays.Day(PublicHolidays.easter(year).date.add({
        days: 39
      }), "feast_of_the_ascension"), new PublicHolidays.Day(PublicHolidays.easter(year).date.add({
        days: 48
      }), "pentecost"), new PublicHolidays.Day(PublicHolidays.easter(year).date.add({
        days: 60
      }), "corpus_christi"), new PublicHolidays.Day(context.set({
        month: 7,
        day: 15
      }), "maria"), new PublicHolidays.Day(context.set({
        month: 9,
        day: 26
      }), "austrian_national_day"), new PublicHolidays.Day(context.set({
        month: 10,
        day: 1
      }), "all_saints"), new PublicHolidays.Day(context.set({
        month: 11,
        day: 8
      }), "immaculate_conception"), new PublicHolidays.Day(context.set({
        month: 11,
        day: 25
      }), "christmas"), new PublicHolidays.Day(context.set({
        month: 11,
        day: 26
      }), "st_stephen")
    ];
  }
});
