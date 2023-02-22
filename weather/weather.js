// file: weather.js

class Weather {
  constructor(client) {
    this.client = client;
    this.data = null;
  }

  async load(cityName) {
    this.data = await this.client.fetchWeatherData(cityName);
  }

  getWeatherData() {
    return this.data;
  }
}

module.exports = Weather;
