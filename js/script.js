// alert("Your files are totally linked!");
// Create an Object or Class for your Tamagotchi
class Nadagotchi {
    constructor (name) {
        this.name = name;
        this.age = 0;
        this.hunger = 0;
        this.sleepiness = 0;
        this.boredom = 0;
        this.chonkiness = 0
    }
    growUp() {
            this.age++
            return this.age;
    }
    getHungry() {
        if (this.hunger < 10) {
            this.hunger++;
            return this.hunger;
        }
    }
    getSleepy() {
        if (this.sleepiness < 10) {
            this.sleepiness++;
            return this.sleepiness;
        }
    }
    getBored() {
        if (this.boredom < 10) {
            this.boredom++;
            return this.boredom;
        }
    }
    getChonky() {
        if (this.chonkiness < 10) {
            this.chonkiness++;
            return this.chonkiness;
        }
    }
}
// Instantiate your Tamagotchi
const blackKitty = new Nadagotchi("Grump");
// Add the ability to name your pet.
const nameOfPet = prompt("Name your pet!");
nametarget.innerHTML = "Hello, My Name is " + nameOfPet + "!"
// Change egg style
let lightEgg = document.getElementById("egg");
let darkEgg = document.getElementById("altegg");
const lightButton = document.querySelector("#light");
lightButton.addEventListener("click", lightMode);
function lightMode() {
        lightEgg.style.visibility = "visible";
        darkEgg.style.visibility = "hidden";
}
const darkButton = document.querySelector("#dark");
darkButton.addEventListener("click", darkMode);
function darkMode() {
    lightEgg.style.visibility = "hidden";
    darkEgg.style.visibility = "visible";
}
// Display metrics for pet: setInterval updates HTML for metrics every second
setInterval(function(){
    const ageLog = document.getElementById("agetarget");
    agetarget.innerHTML = blackKitty.age;
    const hungerLog = document.getElementById("hungertarget");
    hungertarget.innerHTML = blackKitty.hunger;
    const sleepLog = document.getElementById("sleeptarget");
    sleeptarget.innerHTML = blackKitty.sleepiness;
    const boredLog = document.getElementById("boredtarget");
    boredtarget.innerHTML = blackKitty.boredom;
    const chonkLog = document.getElementById("chonktarget");
    chonktarget.innerHTML = blackKitty.chonkiness;
}, 1000)
// Increase your pet's age every x minutes
agingInterval = setInterval(function() {
    blackKitty.growUp();
}, 8000)
// Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
metricInterval = setInterval(function() {
    blackKitty.getHungry();
    blackKitty.getSleepy();
    blackKitty.getBored();
    blackKitty.getChonky();
}, 1000)
const feedButton = document.querySelector("#feed");
feedButton.addEventListener("click", feed);
function feed() {
    blackKitty.hunger-=1;
    return blackKitty.hunger;
}
const sleepButton = document.querySelector("#sleep");
sleepButton.addEventListener("click", sleep); 
function sleep() {
    blackKitty.sleepiness-=1;
    return blackKitty.sleepiness;
}
const playButton = document.querySelector("#play");
playButton.addEventListener("click", play); 
function play() {
    blackKitty.boredom-=1;
    return blackKitty.boredom;
}
const exerciseButton = document.querySelector("#exercise");
exerciseButton.addEventListener("click", exercise); 
function exercise() {
    blackKitty.chonkiness-=1;
    return blackKitty.chonkiness;
}
let babyPic = document.getElementById("kitty");
let bigBoyPic = document.getElementById("cat");
// Morph your pet at certain ages.
petMorphs = setInterval(function() {
    morph();
}, 1000);
function morph() {
    if (blackKitty.age > 5) {
        babyPic.style.visibility = "hidden";
        bigBoyPic.style.visibility = "visible";
    }
}
// Your pet should die if Hunger, Boredom, or Sleepiness hits 10.
petDies = setInterval(function() {
    rainbowBridge();
}, 500);
function rainbowBridge() {
    if (blackKitty.hunger === 10 || blackKitty.sleepiness === 10 || blackKitty.boredom === 10 || blackKitty.chonkiness === 10) {
        clearInterval(metricInterval);
        clearInterval(agingInterval);
        clearInterval(petDies);
        babyPic.style.visibility = "hidden";
        bigBoyPic.style.visibility = "hidden";
        alert(nameOfPet + " has crossed the rainbow bridge :(");
    }
}
// EXTRAS
// Have your Tamagotchi give birth to baby Tamagotchi...
// ...with special powers (extend the class)!