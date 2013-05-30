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
