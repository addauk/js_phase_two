// file thermostat.test.js

const Thermostat = require("./thermostat");

describe("Thermostat", () => {
  it("constructs with an initial temp of 20 degrees and power saving mode on", () => {
    therm = new Thermostat();
    expect(therm.temperature).toBe(20);
    expect(therm.powerSavingMode).toBe(true);
  });
  it("up method increases temp by 1", () => {
    therm = new Thermostat();
    therm.up();
    expect(therm.temperature).toBe(21);
  });
  it("down method decreases temp by 1", () => {
    therm = new Thermostat();
    therm.down();
    expect(therm.temperature).toBe(19);
  });
  it("can turn power saving mode off", () => {
    therm = new Thermostat();
    therm.setPowerSavingMode(false);
    expect(therm.powerSavingMode).toBe(false);
  });
  it("can turn power saving mode back on", () => {
    therm = new Thermostat();
    therm.setPowerSavingMode(false);
    therm.setPowerSavingMode(true);
    expect(therm.powerSavingMode).toBe(true);
  });
  it("if powersaving is on, max temp is 25", () => {
    therm = new Thermostat();
    for (let i = 0; i < 10; i++) {
      therm.up();
    }
    expect(therm.getTemperature()).toBe(25);
  });
  it("if power saving is off, max temp is 32", () => {
    therm = new Thermostat();
    therm.setPowerSavingMode(false);
    for (let i = 0; i < 20; i++) {
      therm.up();
    }
    expect(therm.getTemperature()).toBe(32);
  });
  it("reset method will set temp to 20", () => {
    therm = new Thermostat();
    for (let i = 0; i < 10; i++) {
      therm.up();
    }
    therm.reset();
    expect(therm.getTemperature()).toBe(20);
  });
  it("You can ask about the thermostat's current energy usage: < 18 is low-usage, <= 25 is medium-usage, anything else is high-usage", () => {
    therm = new Thermostat();
    therm.down();
    therm.down();
    therm.down();
    expect(therm.getUsage()).toBe("low-usage");
    for (let i = 0; i < 10; i++) {
      therm.up();
    }
    expect(therm.getUsage()).toBe("medium-usage");
    therm.setPowerSavingMode(false);
    therm.up();
    expect(therm.getUsage()).toBe("high-usage");
  });
  it("getTemperature method returns temperature", () => {
    therm = new Thermostat();
    expect(therm.getTemperature()).toBe(20);
  });
});
