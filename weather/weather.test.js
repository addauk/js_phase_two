// file: weather.js

const Weather = require("./weather");

const jestFetchMock = require("jest-fetch-mock");
jestFetchMock.enableMocks();

describe("Weather", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it("fetches weather data", async () => {
    const mockClient = {
      fetchWeatherData: jest.fn().mockResolvedValueOnce({
        name: "London",
      }),
    };
    const weather = new Weather(mockClient);
    await weather.load("London");
    expect(mockClient.fetchWeatherData).toHaveBeenCalledWith("London");
    const weatherData = weather.getWeatherData();
    expect(weatherData.name).toEqual("London");
  });
});
