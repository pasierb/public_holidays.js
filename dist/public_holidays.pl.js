PublicHolidays.registerFactory("pl", {
  holidays: function(year) {
    return [
      PublicHolidays.newYear(year), new PublicHolidays.Day((Date.today()).set({
        day: 6,
        month: 0,
        year: year
      }), "three_kings"), PublicHolidays.easter(year), new PublicHolidays.Day(PublicHolidays.easter(year).date.add({
        days: 1
      }), "easter_monday"), new PublicHolidays.Day(PublicHolidays.easter(year).date.add({
        days: 48
      }), "pentecost"), new PublicHolidays.Day(PublicHolidays.easter(year).date.add({
        days: 60
      }), "corpus_christi"), new PublicHolidays.Day((Date.today()).set({
        day: 1,
        month: 4,
        year: year
      }), "first_of_may"), new PublicHolidays.Day((Date.today()).set({
        day: 3,
        month: 4,
        year: year
      }), "third_of_may"), new PublicHolidays.Day((Date.today()).set({
        day: 15,
        month: 7,
        year: year
      }), "maria"), new PublicHolidays.Day((Date.today()).set({
        day: 1,
        month: 10,
        year: year
      }), "all_saints"), new PublicHolidays.Day((Date.today()).set({
        day: 11,
        month: 10,
        year: year
      }), "independence_day"), new PublicHolidays.Day((Date.today()).set({
        day: 25,
        month: 11,
        year: year
      }), "christmas"), new PublicHolidays.Day((Date.today()).set({
        day: 26,
        month: 11,
        year: year
      }), "boxing_day")
    ];
  }
});
