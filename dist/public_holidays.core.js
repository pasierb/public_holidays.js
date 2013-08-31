var PublicHolidays;

PublicHolidays = {
  options: {
    factory: null,
    factories: {},
    holidayNames: {
      new_year: "New Year's Day",
      three_kings: "Epiphany",
      easter: "Easter Sunday",
      easter_monday: "Easter Monday",
      first_of_may: "Labour Day",
      third_of_may: "Constitution Day",
      maria: "Assumption of the Blessed Virgin Mary",
      pentecost: "Pentecost Sunday",
      corpus_christi: "Corpus Christi",
      all_saints: "All Saints' Day",
      independence_day: "Independence Day",
      christmas: "Christmas Day",
      boxing_day: "Boxing Day"
    }
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
  newYear: function(year) {
    if (!year) {
      year = Date.today().getFullYear();
    }
    return new PublicHolidays.Day(Date.today().set({
      month: 0,
      day: 1,
      year: year
    }), "new_year");
  },
  easter: function(year) {
    var a, b, c, d, date, e, f, g, h, i, k, l, m, n, n0, p;

    a = year % 19;
    b = Math.floor(year / 100);
    c = year % 100;
    d = Math.floor(b / 4);
    e = b % 4;
    f = Math.floor((b + 8) / 25);
    g = Math.floor((b - f + 1) / 3);
    h = (19 * a + b - d - g + 15) % 30;
    i = Math.floor(c / 4);
    k = c % 4;
    l = (32 + 2 * e + 2 * i - h - k) % 7;
    m = Math.floor((a + 11 * h + 22 * l) / 451);
    n0 = h + l + 7 * m + 114;
    n = Math.floor(n0 / 31) - 1;
    p = n0 % 31 + 1;
    date = new Date(year, n, p);
    return new PublicHolidays.Day(date, 'easter');
  }
};

PublicHolidays.Day = function(date, code) {
  this.date = date;
  this.code = code;
  this.getName = function() {
    return this.name = PublicHolidays.options.holidayNames[code];
  };
  this.getName();
  return this;
};
