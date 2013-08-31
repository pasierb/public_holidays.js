'use strict';

describe("PublicHolidays pl", function () {
  beforeEach(function () {
    PublicHolidays.setFactory("pl");
  });

  describe("2013", function () {
    var holidays;
    beforeEach(function () {
      holidays = PublicHolidays.all(2013);
    });

    it("should contain new year's day", function () {
      var holiday = holidays[0];
      expect(holiday.code).toEqual("new_year");
      expect(holiday.date.getDate()).toEqual(1);
      expect(holiday.date.getMonth()).toEqual(0);
    });

    it("should contain three kings", function () {
      var holiday = holidays[1];
      expect(holiday.code).toEqual("three_kings");
      expect(holiday.date.getDate()).toEqual(6);
      expect(holiday.date.getMonth()).toEqual(0);
    });

    it("should contain easter", function () {
      var holiday = holidays[2];
      expect(holiday.code).toEqual("easter");
      expect(holiday.date.getDate()).toEqual(31);
      expect(holiday.date.getMonth()).toEqual(2);
    });

    it("should contain easter_monday", function () {
      var holiday = holidays[3];
      expect(holiday.code).toEqual("easter_monday");
      expect(holiday.date.getDate()).toEqual(1);
      expect(holiday.date.getMonth()).toEqual(3);
    });

    it("should contain pentecost", function () {
      var holiday = holidays[4];
      expect(holiday.code).toEqual("pentecost");
      expect(holiday.date.getDate()).toEqual(18);
      expect(holiday.date.getMonth()).toEqual(4);
    });

    it("should contain corpus christi", function () {
      var holiday = holidays[5];
      expect(holiday.code).toEqual("corpus_christi");
      expect(holiday.date.getDate()).toEqual(30);
      expect(holiday.date.getMonth()).toEqual(4);
    });

    it("should contain first of may", function () {
      var holiday = holidays[6];
      expect(holiday.code).toEqual("first_of_may");
      expect(holiday.date.getDate()).toEqual(1);
      expect(holiday.date.getMonth()).toEqual(4);
    });

    it("should contain third of may", function () {
      var holiday = holidays[7];
      expect(holiday.code).toEqual("third_of_may");
      expect(holiday.date.getDate()).toEqual(3);
      expect(holiday.date.getMonth()).toEqual(4);
    });

    it("should contain maria", function () {
      var holiday = holidays[8];
      expect(holiday.code).toEqual("maria");
      expect(holiday.date.getDate()).toEqual(15);
      expect(holiday.date.getMonth()).toEqual(7);
    });

    it("should contain all saints", function () {
      var holiday = holidays[9];
      expect(holiday.code).toEqual("all_saints");
      expect(holiday.date.getDate()).toEqual(1);
      expect(holiday.date.getMonth()).toEqual(10);
    });

    it("should contain independence day", function () {
      var holiday = holidays[10];
      expect(holiday.code).toEqual("independence_day");
      expect(holiday.date.getDate()).toEqual(11);
      expect(holiday.date.getMonth()).toEqual(10);
    });

    it("should contain christmas", function () {
      var holiday = holidays[11];
      expect(holiday.code).toEqual("christmas");
      expect(holiday.date.getDate()).toEqual(25);
      expect(holiday.date.getMonth()).toEqual(11);
    });

    it("should contain boxing_day", function () {
      var holiday = holidays[12];
      expect(holiday.code).toEqual("boxing_day");
      expect(holiday.date.getDate()).toEqual(26);
      expect(holiday.date.getMonth()).toEqual(11);
    });
  });
});
