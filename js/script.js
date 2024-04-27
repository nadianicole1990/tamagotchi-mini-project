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
        console.log("Hi, I am get hungry.")
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
    morph() {
        console.log("Hi, I am morph.")
        if (this.age === 5) {
            console.log("Time to morph!")
        }
    }
    // rainbowBridge() {
    //     console.log("Hi, I am rainbow bridge.")
    //     if (this.hunger === 10) {
    //         console.log("We should die now.");
    //     }
    // }
}
// Instantiate your Tamagotchi
const blackKitty = new Nadagotchi("Grump");
// Add the ability to name your pet.
const nameOfPet = prompt("Name your pet!");
nametarget.innerHTML = "Name: " + nameOfPet
// Display metrics for pet
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
    // Morph your pet at certain ages.
    blackKitty.morph();
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
petDies = setInterval(function() {
    rainbowBridge();
}, 1000);
function rainbowBridge() {
    console.log("Hi, I am rainbow bridge.")
    if (blackKitty.hunger === 10 || blackKitty.sleepiness === 10 || blackKitty.boredom === 10) {
        console.log("We should die now.");
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