import { describe, expect } from "@jest/globals";

import { filterWeatherIcons } from "../icons/filterWeatherIcons";
import icons from "../icons/icons";
import { drizzle300Ids, thunderstorm200Ids } from "./testData";

describe("filterWeatherIcons test", () => {
  describe("Test 200 Thunderstorm ids", () => {
    it.each(thunderstorm200Ids)("Should render rainy icon five", (ids) => {
      const actualDay = filterWeatherIcons("11d", ids);

      const actualNight = filterWeatherIcons("11n", ids);

      const expected = icons.thunder;

      expect(actualDay).toBe(expected);

      expect(actualNight).toBe(expected);
    });
  });
  describe("Test 300 Drizzle ids", () => {
    it.each(drizzle300Ids)("Should render rainy icon five", (ids) => {
      const actualDay = filterWeatherIcons("09d", ids);

      const actualNight = filterWeatherIcons("09n", ids);

      const expected = icons.rainy.five;

      expect(actualDay).toBe(expected);

      expect(actualNight).toBe(expected);
    });
  });
  describe("Test 500 Snow ids", () => {
    it("Should render rainy icon two", () => {
      const actual500Day = filterWeatherIcons("10d", 500);
      const actual501Day = filterWeatherIcons("10d", 501);

      const actual500Night = filterWeatherIcons("10n", 500);
      const actual501Night = filterWeatherIcons("10n", 501);

      const expected = icons.rainy.two;

      expect(actual500Day).toBe(expected);
      expect(actual501Day).toBe(expected);

      expect(actual500Night).toBe(expected);
      expect(actual501Night).toBe(expected);
    });

    it("Should render rainy icon three", () => {
      const actual502Day = filterWeatherIcons("10d", 502);
      const actual503Day = filterWeatherIcons("10d", 503);
      const actual504Day = filterWeatherIcons("10d", 504);

      const expected = icons.rainy.three;

      expect(actual502Day).toBe(expected);
      expect(actual503Day).toBe(expected);
      expect(actual504Day).toBe(expected);
    });

    it("Should render rainy icon six", () => {
      const actual502Night = filterWeatherIcons("10n", 502);
      const actual503Night = filterWeatherIcons("10n", 503);
      const actual504Night = filterWeatherIcons("10n", 504);

      const expected = icons.rainy.six;

      expect(actual502Night).toBe(expected);
      expect(actual503Night).toBe(expected);
      expect(actual504Night).toBe(expected);
    });

    it("Should render snowy icon five", () => {
      const actual511Day = filterWeatherIcons("13d", 511);

      const actual511Night = filterWeatherIcons("13n", 511);

      const expected = icons.snowy.five;

      expect(actual511Day).toBe(expected);

      expect(actual511Night).toBe(expected);
    });
  });
  describe("Test 600 Snow ids", () => {
    it("Should render snowy icon four", () => {
      const expected = icons.snowy.four;

      const actual600Day = filterWeatherIcons("13d", 600);
      const actual612Day = filterWeatherIcons("13d", 612);
      const actual615Day = filterWeatherIcons("13d", 615);
      const actual620Day = filterWeatherIcons("13d", 620);

      const actual600Night = filterWeatherIcons("13n", 600);
      const actual612Night = filterWeatherIcons("13n", 612);
      const actual615Night = filterWeatherIcons("13n", 615);
      const actual620Night = filterWeatherIcons("13n", 620);

      expect(actual600Day).toBe(expected);
      expect(actual612Day).toBe(expected);
      expect(actual615Day).toBe(expected);
      expect(actual620Day).toBe(expected);

      expect(actual600Night).toBe(expected);
      expect(actual612Night).toBe(expected);
      expect(actual615Night).toBe(expected);
      expect(actual620Night).toBe(expected);
    });

    it("Should render snowy icon five", () => {
      const expected = icons.snowy.five;

      const actual601Day = filterWeatherIcons("13d", 601);
      const actual611Day = filterWeatherIcons("13d", 611);
      const actual613Day = filterWeatherIcons("13d", 613);
      const actual616Day = filterWeatherIcons("13d", 616);
      const actual621Day = filterWeatherIcons("13d", 621);

      const actual601Night = filterWeatherIcons("13n", 601);
      const actual611Night = filterWeatherIcons("13n", 611);
      const actual613Night = filterWeatherIcons("13n", 613);
      const actual616Night = filterWeatherIcons("13n", 616);
      const actual621Night = filterWeatherIcons("13n", 621);

      expect(actual601Day).toBe(expected);
      expect(actual611Day).toBe(expected);
      expect(actual613Day).toBe(expected);
      expect(actual616Day).toBe(expected);
      expect(actual621Day).toBe(expected);

      expect(actual601Night).toBe(expected);
      expect(actual611Night).toBe(expected);
      expect(actual613Night).toBe(expected);
      expect(actual616Night).toBe(expected);
      expect(actual621Night).toBe(expected);
    });
    it("Should render snowy icon six", () => {
      const expected = icons.snowy.six;

      const actual602Day = filterWeatherIcons("13d", 602);
      const actual622Day = filterWeatherIcons("13d", 622);

      const actual602Night = filterWeatherIcons("13n", 602);
      const actual622Night = filterWeatherIcons("13n", 622);

      expect(actual602Day).toBe(expected);
      expect(actual622Day).toBe(expected);

      expect(actual602Night).toBe(expected);
      expect(actual622Night).toBe(expected);
    });
  });
  describe("Test 800 Clear and Clouds ids", () => {
    it("Should render clear day and clear night icon", () => {
      const expected = icons.clear.night;

      const actual800Day = filterWeatherIcons("01n", 800);
      const actual800Night = filterWeatherIcons("01n", 800);

      expect(actual800Day).toBe(expected);
      expect(actual800Night).toBe(expected);
    });

    it("Should render a cloudyDay icon", () => {
      const expected = icons.cloudyDay.one;

      const actual801 = filterWeatherIcons("02d", 801);

      expect(actual801).toBe(expected);
    });

    it("Should render a cloudy icon", () => {
      const expected = icons.cloudy;

      const actual802Day = filterWeatherIcons("03d", 802);
      const actual803Day = filterWeatherIcons("03d", 803);
      const actual804Day = filterWeatherIcons("04d", 804);
      const actual802Night = filterWeatherIcons("03d", 802);
      const actual803Night = filterWeatherIcons("03d", 803);
      const actual804Night = filterWeatherIcons("04d", 804);

      expect(actual802Day).toBe(expected);
      expect(actual803Day).toBe(expected);
      expect(actual804Day).toBe(expected);
      expect(actual802Night).toBe(expected);
      expect(actual803Night).toBe(expected);
      expect(actual804Night).toBe(expected);
    });
  });
});
