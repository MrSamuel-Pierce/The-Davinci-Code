// Select Input Field
var input = document.querySelector("#input");

// console.log(input)
// User input template option:
//<input type="number" class="form-control" name="input" id="input" placeholder="Enter Value Here...">

// Select unit selections
var unit = document.querySelector("#unit");
// console.log(unit)

// Catch User Input Event and Unit Change
input.addEventListener("input", convert);

unit.addEventListener("input", convert);

function convert() {
// console.log("hello from convert")

    // Get Value of User Input and Units
    var value = input.value;
    // console.log(value);
    var unitValue = unit.value;
    // console.log(unitValue);
    var output = document.querySelector("#output");
    // console.log(output)
    if(value !== "") {
    // Show Output when there is a value
        output.style.display = "block";
    } else {
        output.style.display = "none";
    }
    // Check Unit Type
    switch(unitValue) {
        case "lbs":
            convertLbs();
            break;

        case "litra":
            convertLitra();
            break;

        case "grams":
            convertGrams();
            break;

        case "giru":
            convertGiru();
            break;

        case "mina":
            convertMina();
            break;

        case "talent":
            convertTalent();
            break;

        case "kikkar":
            convertKikkar();
            break;

        case "zuz":
            convertZuz();
            break;

        case "shekels":
            convertShekels();
            break;

        case "maris":
            convertMaris();
            break;

        case "light royal talent":
            convertLightRoyalTalent();
            break;

        case "litres":
            convertLitres();
            break;

        case "logs":
            convertLogs();
            break;

        case "kilograms":
            convertKilograms();
            break;

        case "ounces":
            convertOunces();
            break;

        case "chain":
            convertChain();
            break;

        case "yards":
            convertYards();
            break;

        case "cubits":
            convertCubits();
            break;

        case "yoke":
            convertYoke();
            break;

        case "acres":
            convertAcres();
            break;

        case "searot":
            convertSearot();
            break;
        
        case "adashot":
            convertAdashot();
            break;
        
        case "gerisin":
            convertGerisin();
            break;

        case "beitzas":
            convertBeitzas();
            break;

        case "ephahs":
            convertEphahs();
            break;

        case "omers":
            convertOmers();
            break;

        case "baths":
            convertBaths();
            break;

        case "beit rova":
            convertBeitRova();
            break;
        
        case "beit seah": 
            convertBeitSeah();
            break;
        
        case "beit kor":
            convertBeitKor();
            break;

        case "miles":
            convertMiles();
            break;

        case "meters":
            convertMeters();
            break;

        case "inches":
            convertInches();
            break;

        case "centimeters":
            convertCentimeters();
            break;

        case "lines":
            convertLines();
            break;

        case "fingers":
            convertFingers();
            break;

        case "palms":
            convertPalms();
            break;

        case "hands":
            convertHands();
            break;

        case "feet":
            convertFeet();
            break;

        case "links":
            convertLinks();
            break;

        case "poles":
            convertPoles();
            break;

        case "nails":
            convertNails();
            break;

        case "span":
            convertSpans();
            break;

        case "yojana stages":
            convertYojanaStages();
            break;

        case "dhanush bows":
            convertDhanushBows();
            break;

        case "master cubits":
            convertMasterCubits();
            break;

        case "common cubits":
            convertCommonCubits();
            break;

        case "double common cubits":
            convertDoubleCommonCubits();
            break;

        case "half yards":
            convertHalfYards();
            break;

        case "half cubits":
            convertHalfCubits();
            break;

        case "one 24th cubits":
            convertOne24thCubits();
            break;

        case "royal cubits":
            convertRoyalCubits();
            break;

        case "quarter miles":
            convertQuarterMiles();
            break;

        case "one twenty fourth cubits":
            convertOneTwentyFourthCubits();
            break;

        case "rods":
            convertRods();
            break;

        case "half miles":
            convertHalfMiles();
            break;

        case "touchdowns":
            convertTouchdowns();
            break;

        case "perches":
            convertPerches();
            break;

        case "1st downs":
            convert1stDowns();
            break;

        case "2nd downs":
            convert2ndDowns();
            break;

        case "3rd downs":
            convert3rdDowns();
            break;

        case "4th downs":
            convert4thDowns();
            break;

        case "two chains":
            convertTwoChains();
            break;

        case "field goals":
            convertFieldGoals();
            break;

        case "furlongs":
            convertFurlongs();
            break;

        case "square cubits":
            convertSquareCubits();
            break;

        case "hours":
            convertHours();
            break;

        case "minutes":
            convertMinutes();
            break;

        case "seconds":
            convertSeconds();
            break;

        case "raga":
            convertRaga();
            break;

        case "parts":
            convertParts();
            break;

        case "heleq":
            convertHeleq();
            break;

        case "shaah":
            convertShaah();
            break;

        case "hours":
            convertHours();
            break;

        case "days":
            convertDays();
            break;

        case "celsius":
            convertCelsius();
            break;

        case "fahrenheit":
            convertFahrenheit();
            break;

        case "ziv":
            convertZiv();
            break;

        case "ethanim":
            convertEthanim();
            break;

        case "minah":
            convertMinah();
            break;
        
            case "zuzim":
            convertZuzim();
            break;

            case "seloim":
            convertSeloim();
            break;

            case "adashah":
            convertAdashah();
            break;

            case "amot":
            convertAmot();
            break;

            case "searah":
            convertSearah();
            break;

            case "geris":
            convertGeris();
            break;
    }   
}


var card1 = document.querySelector("#card-1");
var card2 = document.querySelector("#card-2");
var card3 = document.querySelector("#card-3");
var card4 = document.querySelector("#card-4");
var card5 = document.querySelector("#card-5");
var card6 = document.querySelector("#card-6");
var card7 = document.querySelector("#card-7");
var card8 = document.querySelector("#card-8");
var card9 = document.querySelector("#card-9");
var card10 = document.querySelector("#card-10");
var card11 = document.querySelector("#card-11");
var card12 = document.querySelector("#card-12");
var card13 = document.querySelector("#card-13");
var card14 = document.querySelector("#card-14");
var card15 = document.querySelector("#card-15");
var card16 = document.querySelector("#card-16");
var card17 = document.querySelector("#card-17");
var card18 = document.querySelector("#card-18");
var card19 = document.querySelector("#card-19");
var card20 = document.querySelector("#card-20");
var card21 = document.querySelector("#card-21");
var card22 = document.querySelector("#card-22");
var card23 = document.querySelector("#card-23");
var card24 = document.querySelector("#card-24");
var card25 = document.querySelector("#card-25");
var card26 = document.querySelector("#card-26");
var card27 = document.querySelector("#card-27");
var card28 = document.querySelector("#card-28");
var card29 = document.querySelector("#card-29");
var card30 = document.querySelector("#card-30");
var card31 = document.querySelector("#card-31");
var card32 = document.querySelector("#card-32");
var card33 = document.querySelector("#card-33");


function convertLbs() {

card1.querySelector().textContent=""
card2.querySelector().textContent=""
card3.querySelector().textContent=""
card4.querySelector().textContent=""
card5.querySelector().textContent=""
card6.querySelector().textContent=""
card7.querySelector().textContent=""
card8.querySelector().textContent=""
card9.querySelector().textContent=""
card10.querySelector().textContent=""
card11.querySelector().textContent=""
card12.querySelector().textContent=""
card13.querySelector().textContent=""
card14.querySelector().textContent=""
card15.querySelector().textContent=""


card1.querySelector().textContent= value
card2.querySelector().textContent= value
card3.querySelector().textContent= value
card4.querySelector().textContent= value
card5.querySelector().textContent= value
card6.querySelector().textContent= value
card7.querySelector().textContent= value
card8.querySelector().textContent= value
card9.querySelector().textContent= value
card10.querySelector().textContent= value
card11.querySelector().textContent= value
card12.querySelector().textContent= value
card13.querySelector().textContent= value
card14.querySelector().textContent= value
card15.querySelector().textContent= value





 // Grams
 document.querySelector("#Grams").textContent = value * 453.592;

 // Kilograms
 document.querySelector("#Kilograms").textContent = value * 453.592 / 1000;

 // Ounces
 document.querySelector("#Ounces").textContent = value * 16;
}

card1.querySelector().textContent=""
card2.querySelector().textContent=""
card3.querySelector().textContent=""
card4.querySelector().textContent=""
card5.querySelector().textContent=""
card6.querySelector().textContent=""
card7.querySelector().textContent=""
card8.querySelector().textContent=""
card9.querySelector().textContent=""
card10.querySelector().textContent=""
card11.querySelector().textContent=""
card12.querySelector().textContent=""
card13.querySelector().textContent=""
card14.querySelector().textContent=""
card15.querySelector().textContent=""
card16.querySelector().textContent=""
card17.querySelector().textContent=""
card18.querySelector().textContent=""
card19.querySelector().textContent=""
card20.querySelector().textContent=""
card21.querySelector().textContent=""
card22.querySelector().textContent=""
card23.querySelector().textContent=""
card24.querySelector().textContent=""
card25.querySelector().textContent=""
card26.querySelector().textContent=""
card27.querySelector().textContent=""
card28.querySelector().textContent=""
card29.querySelector().textContent=""
card30.querySelector().textContent=""
card31.querySelector().textContent=""
card32.querySelector().textContent=""
card33.querySelector().textContent=""


card1.querySelector().textContent= value
card2.querySelector().textContent= value
card3.querySelector().textContent= value
card4.querySelector().textContent= value
card5.querySelector().textContent= value
card6.querySelector().textContent= value
card7.querySelector().textContent= value
card8.querySelector().textContent= value
card9.querySelector().textContent= value
card10.querySelector().textContent= value
card11.querySelector().textContent= value
card12.querySelector().textContent= value
card13.querySelector().textContent= value
card14.querySelector().textContent= value
card15.querySelector().textContent= value
card16.querySelector().textContent= value
card17.querySelector().textContent= value
card18.querySelector().textContent= value
card19.querySelector().textContent= value
card20.querySelector().textContent= value
card21.querySelector().textContent= value
card22.querySelector().textContent= value
card23.querySelector().textContent= value
card24.querySelector().textContent= value
card25.querySelector().textContent= value
card26.querySelector().textContent= value
card27.querySelector().textContent= value
card28.querySelector().textContent= value
card29.querySelector().textContent= value
card30.querySelector().textContent= value
card31.querySelector().textContent= value
card32.querySelector().textContent= value
card33.querySelector().textContent= value


    // NFL Secrets

    // 12 lines = one inch; 12 inches = one foot; 
    // 3 feet = one yard; 36 inches = one yard;
    // 8 furlongs = one mile
    // 1760 yards = one mile; 880 yards = half mile;
    // 440 yards = quarter mile
    // 100 links = one chain
    // 10 chains = one furlong
    // 40 poles = one furlong
    // 8 furlongs = one mile
    // 4 inches = one hand
    // 4 poles = one chain
    // 22 yards = one chain
    // 5.5 yards = one pole = 1 rod = 1 perch
    // 4 poles = one chain
    // 44 yards = two chains = one field goal
    // 10 yards = one 1st down
    // 100 yards = one touchdown
    // 4 poles = one chain 
    // 44 yards = two chains = one field goal
    // 10 yards = one 1st down
    // 22 yards = one 2nd down = 4 poles = one chain 
    // 5.5 yards = one 3rd down = 1 perch
    // 100 yards = one touchdown
// Searot= Searah = hair, square 1/36 of a geris-->
// Adashot= Adashah = lentils, 1/9 of a geris-->  
// Gerisin = Geris = hulled fava bean, a circle with a diameter of about 2 centimeters-->
// Amot = Amah Al Amah = square cubit 
//Square Cubits= 0.232 to 0.328(m)2 =(2.50-3.53(ft)2)


    // Nails

    // Fingers

    // Spans

    // Yojana Stages

    // Dhanush Bows

    // Master Cubits

    // Common Cubits

    // Double Common Cubits

    // Half Yards

    // Palms

    // Half Cubits

    // Feet

    // Inches

    // One Twenty Fourth Cubits

    // Royal Cubits
