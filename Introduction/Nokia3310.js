const prompt = require("prompt-sync")();
let menu = "";

function nokia_phone() {
    const menu = prompt(`
                        NOKIA PHONE MAIN MENU
                             
                            1-> Phone book              
                            2-> Messages                
                            3-> Chat                    
                            4-> Call Register           
                            5-> Tones                   
                            6-> Settings               
                            7-> Call Divert             
                            8-> Games                   
                            9-> Calculator             
                            10-> Reminders              
                            11-> Clock                  
                            12-> Profiles               
                            13-> SIM services           

                    Select options 1 to 13 to access phone menu: `);
      
                    //function menu(options){}
                    switch (menu) {
                        case '1':
                            console.log(phone_book());
                            break;
                        case '2':
                            console.log(message());
                            break;
                        case '3':
                            console.log(chat());
                            break;
                        case '4':
                            console.log(call_register());
                            break;
                        case '5':
                            console.log(tone());
                            break;
                        case '6':
                            console.log(setting());
                            break;
                        case '7':
                            console.log(call_divert());
                            break;
                        case '8':
                            console.log(games());
                            break;
                        case '9':
                            console.log(calculator());
                            break;
                        case '10':
                            console.log(reminder());
                            break;
                        case '11':
                            console.log(clock());
                            break;
                        case '12':
                            console.log(profile());
                            break;
                        case '13':
                            console.log(sim_service());
                            break;
                        default:
                            console.log(main_menu());
                    }
                
                }
            

                    function phone_book() {
                        let phone_book_menu = prompt(`
                           Phone Book:
                    
                            1-> Search
                            2-> Service Nos.
                            3-> Add name
                            4-> Erase
                            5-> Edit
                            6-> Assign tone
                            7-> Send b'card
                            8-> Option
                            9-> Speed dials
                            10-> Voice tags  
                    
                            Select option 1 to 10 to access features `);
                    
                        switch (phone_book_menu) {
                            case '1':
                                console.log('Search Activated');
                                main_menu();
                                break;
                            case '2':
                                console.log('Service Nos Activated');
                                main_menu();
                                break;
                            case '3':
                                console.log('Add name Activated');
                                main_menu();
                                break;
                            case '4':
                                console.log('Erase Activated');
                                main_menu();
                                break;
                            case '5':
                                console.log('Edit Activated');
                                main_menu();
                                break;
                            case '6':
                                console.log('Assign tone Activated');
                                main_menu();
                                break;
                            case '7':
                                console.log('Send b\'card Activated');
                                main_menu();
                                break;
                            case '8':
                                console.log('Option');
                                main_menu();
                                break;
                            case '9':
                                console.log('Speed dials activated');
                                break;
                            case '10':
                                console.log("Voice tags activated");
                                break;
                            default:
                                console.log('Invalid option');
                                break;
                        }
                        main_menu();
                       } 
                    
                    
                    function options() {
                        let option_menu = prompt(`
                                 Option Activated                  
                                1-> Type of view
                                2-> Memory Status 
                                Select Option `);
                    
                        switch (option_menu) {
                            case '1':
                                console.log('Type of view Activated');
                                main_menu();
                                break;
                            case '2':
                                console.log('Memory Status Activated');
                                main_menu();
                                break;
                            default:
                                console.log('Invalid option');
                                options();
                        }
                    }
                

                    function main_menu() {
                        let going_back = prompt("Press 1 to go back to the main menu: ");
                        if (going_back === '1') {
                            nokia_phone();
                        } else {
                            console.log("Wrong input entered");
                            main_menu();
                        }
                    }
                    
                    function message() {
                        let message_menu = prompt(`
                                                    Message    
                                                           
                                                1-> Write messages
                                                2-> Inbox
                                                3-> Outbox
                                                4-> Picture messages
                                                5-> Templates
                                                6-> Smileys
                                                7-> Message settings
                                                8-> Info service
                                                9-> Voice mailbox number
                                                10. Service command editor
                                                                         
                                                Select option:  `);
                    
                        switch (message_menu) {
                            case '1':
                                console.log("Write message...");
                                main_menu();
                                break;
                            case '2':
                                console.log("Welcome to inbox");
                                main_menu();
                                break;
                            case '3':
                                console.log("Outbox Activated");
                                main_menu();
                                break;
                            case '4':
                                console.log("Picture message activated");
                                main_menu();
                                break;
                            case '5':
                                console.log("Templates mode is active");
                                main_menu();
                                break;
                            case '6':
                                console.log("Smileys activated");
                                main_menu();
                                break;
                            case '7':
                                console.log("Message setting");
                                main_menu();
                                break;
                            case '8':
                                console.log("Voice mailbox number Activated");
                                main_menu();
                                break;
                            case '9':
                                console.log("Service command editor Activated");
                                main_menu();
                                break;
                            case '10':
                                console.log("Service command editor");
                                break;
                            default:
                        }
                        main_menu();
                    }


                    function common() {
                        let common_menu = prompt(`
                         Common 
                         1-> Delivery report
                         2-> Reply via same centre
                         3-> Character Support
                         Select Option 1 to 3 to access phone common:    `);
                        
                        switch (common_menu) {
                            case '1':
                                console.log("Delivery report Activated");
                                main_menu();
                                break;
                            case '2':
                                console.log("Reply via same centre Activated");
                                main_menu();
                                break;
                            case '3':
                                console.log("Character Support Activated");
                                main_menu();
                                break;
                            default:
                                main_menu();
                        }
                    }
                    
                    function call_register() {
                        let chart_menu = prompt(`
                         Call register    
                            1-> Missed calls
                            2-> Received Calls
                            3-> Dialled numbers
                            4-> Erase recent call lists
                            5-> Show call duration
                            6-> Show call cost
                            7-> Call cost settings
                            8-> prepaid credit   
                                                        
                            Select option 1 to 8 to access phone call register:  `);
                        
                        switch (chart_menu) {
                            case '1':
                                console.log("Missed calls");
                                main_menu();
                                break;
                            case '2':
                                console.log("Received calls");
                                main_menu();
                                break;
                            case '3':
                                console.log("Dialled numbers");
                                main_menu();
                                break;
                            case '4':
                                console.log("Erase recent call list");
                                main_menu();
                                break;
                            case '5':
                                console.log(show_call_duration());
                                break;
                            case '6':
                                console.log("show_call_cost");
                                break;
                            case '7':
                                console.log(call_cost_setting());
                                break;
                            case '8':
                                console.log("Prepaid credit");
                                main_menu();
                                break;
                            default:
                                main_menu();
                        }
                    }

                    function call_cost_setting() {
                        let call_cost_setting_menu = prompt(`
                        Call cost Settings
                                                                                        
                            1-> Call cost limit
                            2-> Show costs in
                            Select option 1 to 2 to access phone call cost setting:  `);
                        
                        switch (call_cost_setting_menu) {
                            case '1':
                                console.log("Call cost limit");
                                main_menu();
                                break;
                            case '2':
                                console.log("Show costs in");
                                main_menu();
                                break;
                            default:
                                main_menu();
                        }
                    }
                    
                    function show_call_duration() {
                        let show_call_duration_menu = prompt(`
                         
                            Show call duration                               
                             1-> Last call duration
                             2-> All calls duration
                             3-> Received calls duration
                             4-> Dialled calls duration
                             5-> Clear timers
                         
                                Select option 1 to 5 to access phone show call duration:  `);
                        
                        switch (show_call_duration_menu) {
                            case '1':
                                console.log("Last call duration");
                                main_menu();
                                break;
                            case '2':
                                console.log("All calls duration");
                                main_menu();
                                break;
                            case '3':
                                console.log("Received calls duration");
                                main_menu();
                                break;
                            case '4':
                                console.log("Dialled calls duration");
                                main_menu();
                                break;
                            case '5':
                                console.log("Clear timers");
                                main_menu();
                                break;
                            default:
                                main_menu();
                        }
                    }
                    
                    function show_call_cost() {
                        let show_call_cost_menu = prompt(`
                         Show call cost
                            1-> Last call cost 
                            2-> All calls cost
                            3-> Clear counters
                            Select option:  `);
                        
                        switch (show_call_cost_menu) {
                            case '1':
                                console.log("Last call cost");
                                main_menu();
                                break;
                            case '2':
                                console.log("All calls cost");
                                main_menu();
                                break;
                            case '3':
                                console.log("Clear counters");
                                main_menu();
                                break;
                            default:
                                main_menu();
                        }
                    }

                    function tone() {
                        let tone_menu = prompt(`
                        
                        Tones
                          1-> Ringing tone
                          2-> Ringing Volume
                          3-> Incoming call alert
                          4-> Composer
                          5-> Message alert tone
                          6-> Keypad tones
                          7-> Warning and game tones
                          8-> Vibrating alert
                          9-> Screen saver

                          Select option 1 to 9 to access phone tone: `);
                        
                        switch (tone_menu) {
                            case '1':
                                console.log("Ringing tone");
                                main_menu();
                                break;
                            case '2':
                                console.log("Ringing Volume");
                                main_menu();
                                break;
                            case '3':
                                console.log("Incoming call alert");
                                main_menu();
                                break;
                            case '4':
                                console.log("Composer");
                                main_menu();
                                break;
                            case '5':
                                console.log("Message alert tone");
                                main_menu();
                                break;
                            case '6':
                                console.log("Keypad tones");
                                main_menu();
                                break;
                            case '7':
                                console.log("Warning and game tones");
                                main_menu();
                                break;
                            case '8':
                                console.log("Vibrating alert");
                                main_menu();
                                break;
                            case '9':
                                console.log("Screen saver");
                                main_menu();
                                break;
                            default:
                                main_menu();
                        }
                    }
                    
                    function setting() {
        
                        let setting_menu = prompt(`
                        Setting
                        1-> Call setting
                        2-> Phone setting
                        3-> Security setting
                        4-> Restore factory settings
                        Select option 1 to 4 to access phone setting: `);
                    }
                    let setting_menu = "";
                        
                        switch (setting_menu) {
                            case '1':
                                console.log("call setting");
                                main_menu();
                                break;
                            case '2':
                                console.log("phone setting");
                                main_menu();
                                break;
                            case '3':
                                console.log("setting");
                                main_menu();
                                break;
                            case '4':
                                console.log("Restore factory setting");
                                main_menu();
                                break;
                            default:
                                main_menu();
                                break;

                }
                function call_divert() {
                    console.log("call divert activated");
                    main_menu();
                }
                function games(){
                    console.log("Game loading.....");
                    main_menu();
                }
                function chat(){
                    console.log("Welcome to chat field");
                    main_menu();
                }
              
                function addition() {
                    let number1 = parseInt(prompt("Enter first Number: "));
                    let number2 = parseInt(prompt("Enter second Number: "));
                    let add = number1 + number2;
                    console.log(`The result is = ${add}`);
                }
                
                function subtraction() {
                    let number1 = parseInt(prompt("Enter first Number: "));
                    let number2 = parseInt(prompt("Enter second Number: "));
                    let answer = number1 - number2;
                    console.log(`The result is = ${answer}`);
                }
                
                function multiplication() {
                    let number1 = parseInt(prompt("Enter first Number: "));
                    let number2 = parseInt(prompt("Enter second Number: "));
                    const numericPattern = /^\d+$/;
                    if(numericPattern.test(number1) && numericPattern.test(number2)){
                        number1 = parseInt(number1);
                        number2 = parseInt(number2);
                        let result = number1 * number2;
                        console.log(`The result is = ${result}`);
                        return result;
                        
                    }
                    else{
                        console.log("Please enter valid numeric input");
                        return null;
                        

                    }
                    
                    
                }
                
                function square() {
                    let number1 = parseInt(prompt("Enter Number: "));
                    let square = number1 * number1;
                    console.log(`The square of ${number1} is = ${square}`);
                }
                
                function calculator(){
                    let calculator_menu = prompt(`
                    ||||||||||||||||||||||||||||
                    WELCOME TO TRUST CALCULATOR
                      select 1 to 4 to perform
                       mathematical operation
                    |||||||||||||||||||||||||||  

                        1-> Addition
                        2-> Subtration
                        3-> Multiplication
                        4-> Square Number

                    |||||||||||||||||||||||||||:`);

                    
                switch(calculator_menu){
                    case '1':
                        console.log(addition());
                        addition();
                        break;
                    case '2':
                        console.log(subtraction());
                        subtraction();
                        break;
                    case '3':
                        console.log(multiplication());
                        multiplication();
                        break;
                    case '4':
                        console.log(square());
                        square(); 
                        break;
                    default:
                }
                main_menu();  
            }
            function reminder(){
                console.log("What can i remind you off?, if nothing..")
                main_menu();
            }

            function clock(){
                let clock_menu = prompt(`
                   ||||||||||||||||||||||||||||
                    WELCOME TO YOUR CLOCK MENU
                      select any option below
                   ||||||||||||||||||||||||||||
                    1-> Alarm Clock
                    2-> Clock Setting
                    3-> Date Setting
                    4-> Stop Watch
                    5-> Countdown timer
                    6-> Author update of Date and Time
                   ||||||||||||||||||||||||||||||||||||:`);

                     switch(clock_menu){
                        case '1':
                            console.log("Set your alarm");
                            break;
                        case '2':
                            console.log("Clock Setting");
                            break;
                        case '3':
                            console.log("Date Setting");
                            break;
                        case '4':
                            console.log("Stop Watch");
                            break;
                        case '5':
                            console.log("Countdown Time");
                            break;
                        case '6':
                            console.log("Author update of Date and Time");
                            break;
                        default:
                            console.log("Function of that kind does not exist!.")
                            break;
                        }
                        main_menu();
            }
            function profile(){
                let profile_menu = prompt(`
                ||||||||||||||||||||||||||||
                WELCOME TO YOUR PROFILE MENU
                    set your profile
                ||||||||||||||||||||||||||||    
                    1-> Profile
                ||||||||||||||||||||||||||||:`);

                switch(profile_menu){
                    case '1':
                        console.log("Set your profile");
                        break;
                    default:
                        console.log("Profile function of that kind is not available.");
                        break;
                }
                main_menu();
                            
               
            }

            function sim_service(){
                let simService = prompt(`
                   ||||||||||||||||||||||||
                    WELCOME TO SIM SERVICE:
                     select one to service
                        your sim
                   |||||||||||||||||||||||| 
                        1-> Sim services
                   ||||||||||||||||||||||||:`);

                   switch(simService){
                    case '1':
                        console.log(" Your Sim is Serviced");
                        break;
                    default:
                        console.log("Service function of that kind is not available");
                        break;    
                   }
                   main_menu();

                }
            




                

