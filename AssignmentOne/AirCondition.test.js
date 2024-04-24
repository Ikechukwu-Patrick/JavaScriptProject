let AirCondition = require("./Aircondition.js");

describe('AirCondition', ()=>{
    let airCondition;
})
    beforeEach(() =>{
        airCondition = new AirCondition;
    });


    test('initial state', () =>{
        airCondition.toggleButton();
        expect(airCondition.getAcOn()).toBe(true);
        airCondition.toggleButton();
        expect(airCondition.getAcOn()).toBe(false);

        
    });

