'use strict';

describe('PublicHolidays core', function () {
  describe("easter", function () {
    describe("2012", function () {
      var year = 2012
        , easter = PublicHolidays.easter(year);

      it("should return correct month", function () {
        expect(easter.date.getMonth()).toEqual(3);
      });

      it("should return correct day", function () {
        expect(easter.date.getDate()).toEqual(8);
      });
    });
    describe("2013", function () {
      var year = 2013
        , easter = PublicHolidays.easter(year);

      it("should return correct month", function () {
        var month = 2;
        expect(easter.date.getMonth()).toEqual(month);
      });

      it("should return correct day", function () {
        var day = 31;
        expect(easter.date.getDate()).toEqual(day);
      });
    });
  });

  describe("factories", function () {
    it("should set factory", function () {
      PublicHolidays.options.factory = null;
      PublicHolidays.setFactory("pl");
      expect(PublicHolidays.options.factory).toEqual(PublicHolidays.options.factories.pl);
    });

    describe("create", function () {
      beforeEach(function () {
        PublicHolidays.options.factory = null;
        PublicHolidays.options.factories = {};
      });

      it("should set current factory", function () {
        expect(PublicHolidays.options.factory).toBeNull()
        var factory = PublicHolidays.registerFactory("pl",{ holidays: function () {}});
        expect(PublicHolidays.options.factory).toEqual(factory);
      });

      it("should add factory", function () {
        expect(PublicHolidays.options.factories).toEqual({})
        var factory = PublicHolidays.registerFactory("pl",{ holidays: function () {}});
        expect(PublicHolidays.options.factories).toEqual({ "pl": factory});
      });

      it("should check if factory has holidays function", function () {
        var currentNumberOfFactories = Object.keys(PublicHolidays.options.factories).length;
        var register = function () {
          PublicHolidays.registerFactory("pl",{});
        }
        expect(register).toThrow();
        expect(Object.keys(PublicHolidays.options.factories).length).toEqual(currentNumberOfFactories);
      });
    });

    describe("all", function () {
      it("should get holidays for current year", function () {
        //var holiday = PublicHolidays.all()[0];
        //expect(holiday.date.getFullYear()).toEqual(Date.today().getFullYear());
      });
    });
  });

  describe("PublicHolidays.Day", function () {
    it("should get name of holiday", function () {
      var day = PublicHolidays.newYear();
      expect(day.name).toEqual("New Year's Day");
    });
  });

});

