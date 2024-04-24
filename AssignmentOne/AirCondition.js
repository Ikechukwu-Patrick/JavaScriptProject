


class AirCondition{
    constructor(){
        this.ac_is_on = false;
        this.ac_temperature = 16;
    }

    getAcOn(){
         return this.ac_is_on;
    }

    getAcOf(){
        return this.ac_is_off;
    }

    toggleButton(){
        this.ac_is_on = !this.ac_is_on;
    }

    getAcTemperature(){
        return this.ac_temperature
    }

    setAcOn(acOn){
        this.ac_is_on = acOn;
    }
    setAcOff(acOff){
        this.ac_is_off = acOff;
    }

    setAcTemperature(acTemp){
        if(this.ac_is_on && acTemp >= 16 && acTemp <= 30){
            this.ac_is_on = acTemp;
        }
    }
    inCreaseAc(){
        if(this.ac_is_on && this.ac_temperature <= 30){
            this.ac_temperature += 1;
        }
    }

    decreaseAc(){
        if(this.ac_is_on && this.ac_temperature <= 30){
            this.ac_temperature -=1;
        }
    }


}
module.exports = (AirCondition)