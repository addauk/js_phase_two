// file: thermostat.js

class Thermostat{
  constructor(){
    this.temperature = 20;
    this.powerSavingMode = true;
  }

  up(){
    this.temperature += 1;
    this.#clampTemp();
  }

  down(){
    this.temperature -= 1;
  }

  getTemperature(){
    return this.temperature;
  }

  setPowerSavingMode(bool){
    this.powerSavingMode = bool;
    
  }

  reset(){
    this.temperature = 20;
  }

  getUsage(){
    if(this.temperature < 18){
      return "low-usage";
    }else if(this.temperature <= 25){
      return "medium-usage";
    }else {
      return "high-usage";
    }
  }

  #clampTemp(){
    let max = 25;
    if(!this.powerSavingMode){
      max = 32;
    }
    this.temperature = Math.min(Math.max(this.temperature,0),max);
  }

};

module.exports = Thermostat;