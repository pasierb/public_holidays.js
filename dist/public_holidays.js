var PublicHolidays;

PublicHolidays = {
  options: {
    factory: null,
    factories: {}
  },
  registerFactory: function(code, factory) {
    factory.holidays();
    this.options.factories[code] = factory;
    return this.options.factory = factory;
  },
  setFactory: function(code) {
    return this.options.factory = this.options.factories[code];
  },
  all: function(year) {
    if (!year) {
      year = Date.today().getFullYear();
    }
    return this.options.factory.holidays(year);
  },
  easter: function(year) {
    var C, D, I, J, K, L, M, N, Y, date;

    Y = year;
    C = Math.floor(Y / 100);
    N = Y - 19 * Math.floor(Y / 19);
    K = Math.floor((C - 17) / 25);
    I = C - Math.floor(C / 4) - Math.floor((C - K) / 3) + 19 * N + 15;
    I = I - 30 * Math.floor(I / 30);
    I = I - Math.floor(I / 28) * (1 - Math.floor(I / 28) * Math.floor(29 / (I + 1)) * Math.floor((21 - N) / 11));
    J = Y + Math.floor(Y / 4) + I + 2 - C + Math.floor(C / 4);
    J = J - 7 * Math.floor(J / 7);
    L = I - J;
    M = 3 + Math.floor((L + 40) / 44);
    D = L + 28 - 31 * Math.floor(M / 4);
    date = new Date();
    date.setYear(Y);
    date.setMonth(M - 1);
    date.setDate(D);
    return new PublicHolidays.Day(date, 'easter');
  }
};

PublicHolidays.Day = function(date, code) {
  this.date = date;
  return this.code = code;
};

PublicHolidays.registerFactory("pl", {
  holidays: function(year) {
    var context;

    context = Date.today().set({
      year: year
    });
    return [
      new PublicHolidays.Day(context.set({
        day: 1,
        month: 0
      }), "new_year"), new PublicHolidays.Day(context.set({
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
