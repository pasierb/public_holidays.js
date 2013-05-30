PublicHolidays.registerFactory("pl", {
  holidays: function(year) {
    var context;

    context = Date.today().set({
      year: year
    });
    return [
      PublicHolidays.newYear(year), new PublicHolidays.Day(context.set({
        day: 6,
        month: 0
      }), "three_kings"), PublicHolidays.easter(year), new PublicHolidays.Day(PublicHolidays.easter(year).date.add({
        days: 1
      }), "easter_monday"), new PublicHolidays.Day(PublicHolidays.easter(year).date.add({
        days: 48
      }), "pentecost"), new PublicHolidays.Day(PublicHolidays.easter(year).date.add({
        days: 60
      }), "corpus_christi"), new PublicHolidays.Day(context.set({
        day: 1,
        month: 4
      }), "first_of_may"), new PublicHolidays.Day(context.set({
        day: 1,
        month: 4
      }), "third_of_may"), new PublicHolidays.Day(context.set({
        day: 15,
        month: 7
      }), "maria"), new PublicHolidays.Day(context.set({
        day: 1,
        month: 10
      }), "all_saints"), new PublicHolidays.Day(context.set({
        day: 11,
        month: 10
      }), "independence_day"), new PublicHolidays.Day(context.set({
        day: 25,
        month: 11
      }), "christmas"), new PublicHolidays.Day(context.set({
        day: 26,
        month: 11
      }), "boxing_day")
    ];
  }
});
