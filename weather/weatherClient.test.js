// inside weatherClient.test.js
const WeatherClient = require("./weatherClient");

describe("fetchWeatherData", () => {
  it("returns a promise of the useful weather data", (done) => {
    new WeatherClient().fetchWeatherData("London").then((weatherData) => {
      expect(weatherData.name).toEqual("London");
      done();
    });
  });
});
