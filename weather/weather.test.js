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
  it("fetches multiple weather data but only provides the latest", async () => {
    const mockClient = {
      fetchWeatherData: jest
        .fn()
        .mockResolvedValueOnce({
          name: "London",
        })
        .mockResolvedValueOnce({
          name: "Tokyo",
        }),
    };
    const weather = new Weather(mockClient);
    await weather.load("London");
    expect(mockClient.fetchWeatherData).toHaveBeenCalledWith("London");
    await weather.load("Tokyo");
    expect(mockClient.fetchWeatherData).toHaveBeenCalledWith("Tokyo");
    const weatherData = weather.getWeatherData();
    expect(weatherData.name).toEqual("Tokyo");
  });
});
