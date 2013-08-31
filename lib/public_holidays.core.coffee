PublicHolidays =
  options:
    factory: null
    factories: {}
    holidayNames:
      new_year: "New Year's Day"
      three_kings: "Epiphany"
      easter: "Easter Sunday"
      easter_monday: "Easter Monday"
      first_of_may: "Labour Day"
      third_of_may: "Constitution Day"
      maria: "Assumption of the Blessed Virgin Mary"
      pentecost: "Pentecost Sunday"
      corpus_christi: "Corpus Christi"
      all_saints: "All Saints' Day"
      independence_day: "Independence Day"
      christmas: "Christmas Day"
      boxing_day: "Boxing Day"

  registerFactory: (code, factory) ->
    factory.holidays()
    @options.factories[code] = factory
    @options.factory = factory

  setFactory: (code) ->
    @options.factory = @options.factories[code]

  all: (year) ->
    year = Date.today().getFullYear() unless year
    @options.factory.holidays(year)

  newYear: (year) ->
    year = Date.today().getFullYear() unless year
    new PublicHolidays.Day Date.today().set({ month: 0, day: 1, year: year }), "new_year"

  # thanks to http://techneilogy.blogspot.com/2012/02/couple-of-years-ago-i-posted-source.html
  easter: (year) ->
    a = year % 19
    b = Math.floor(year / 100)
    c = year % 100
    d = Math.floor(b / 4) 
    e = b % 4
    f = Math.floor((b + 8) / 25)
    g = Math.floor((b - f + 1) / 3) 
    h = (19 * a + b - d - g + 15) % 30
    i = Math.floor(c / 4)
    k = c % 4
    l = (32 + 2 * e + 2 * i - h - k) % 7
    m = Math.floor((a + 11 * h + 22 * l) / 451)
    n0 = (h + l + 7 * m + 114)
    n = Math.floor(n0 / 31) - 1
    p = n0 % 31 + 1
    date = new Date(year,n,p)
    new PublicHolidays.Day(date, 'easter')

PublicHolidays.Day = (date, code) ->
  @date = date
  @code = code
  @getName = ->
    @name = PublicHolidays.options.holidayNames[code]
  @getName()
  this
