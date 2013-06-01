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

  # thanks to http://coderzone.org/library/Get-Easter-Date-for-any-year-in-Javascript_1059.htm
  easter: (year) ->
    year = Date.today().getFullYear() unless year
    Y = year
    C = Math.floor(Y/100)
    N = Y - 19*Math.floor(Y/19)
    K = Math.floor((C - 17)/25)
    I = C - Math.floor(C/4) - Math.floor((C - K)/3) + 19*N + 15
    I = I - 30*Math.floor((I/30))
    I = I - Math.floor(I/28)*(1 - Math.floor(I/28)*Math.floor(29/(I + 1))*Math.floor((21 - N)/11))
    J = Y + Math.floor(Y/4) + I + 2 - C + Math.floor(C/4)
    J = J - 7*Math.floor(J/7)
    L = I - J
    M = 3 + Math.floor((L + 40)/44)
    D = L + 28 - 31*Math.floor(M/4)

    date = new Date()
    date.setYear(Y)
    date.setMonth(M-1)
    date.setDate(D)
    new PublicHolidays.Day(date, 'easter')

PublicHolidays.Day = (date, code) ->
  @date = date
  @code = code
  @getName = ->
    @name = PublicHolidays.options.holidayNames[code]
  @getName()
  this
