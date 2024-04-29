// alert("Your files are totally linked!");
// Create an Object or Class for your Tamagotchi
class Nadagotchi {
    constructor (name) {
        this.name = name;
        this.age = 0;
        this.hunger = 0;
        this.sleepiness = 0;
        this.boredom = 0;
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
}
// Instantiate your Tamagotchi
const blackKitty = new Nadagotchi("Grump");
// Add the ability to name your pet.
const nameOfPet = prompt("Name your pet!");
nametarget.innerHTML = "Hello, My Name is " + nameOfPet + "!"
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
}, 1000)
// Increase your pet's age every x minutes
agingInterval = setInterval(function() {
    blackKitty.growUp();
}, 4000)
// Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
metricInterval = setInterval(function() {
    blackKitty.getHungry();
    blackKitty.getSleepy();
    blackKitty.getBored();
}, 2000)
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
// Morph your pet at certain ages.
petMorphs = setInterval(function() {
    morph();
}, 1000);
function morph() {
    if (blackKitty.age >= 5) {
        let babyPic = document.getElementById("kitty");
        let bigBoyPic = document.getElementById("cat");
        babyPic.style.visibility = "hidden";
        bigBoyPic.style.visibility = "visible";
        // babyPic.src = "./images/gentlecat.png"
        // babyPic.setAttribute("src", "./images/gentlecat.png");

    }
}
petDies = setInterval(function() {
    rainbowBridge();
}, 1000);
function rainbowBridge() {
    if (blackKitty.hunger === 10 || blackKitty.sleepiness === 10 || blackKitty.boredom === 10) {
        clearInterval(metricInterval);
        clearInterval(agingInterval);
        clearInterval(petDies);
        alert(nameOfPet + " has crossed the rainbow bridge :(");
    }
}
// EXTRAS
// Have your Tamagotchi give birth to baby Tamagotchi...
// ...with special powers (extend the class)!
// Add an exercise() method to your Tamagotchi, that affects certain properties