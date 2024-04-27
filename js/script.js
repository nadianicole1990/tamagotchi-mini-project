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
            this.hunger++;
            return this.hunger;
    }
    getSleepy() {
            this.sleepiness++;
            return this.sleepiness;
    }
    getBored() {
            this.boredom++;
            return this.boredom;
    }
}
// Instantiate your Tamagotchi
const blackKitty = new Nadagotchi("Grump");
// Add the ability to name your pet.
// const nameOfPet = prompt("Name your pet!");
// nametarget.innerHTML = "Name: " + nameOfPet
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
setInterval(function() {
    // Increase your pet's age every x minutes
    blackKitty.growUp();
}, 10000)
setInterval(function() {
    // Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
    blackKitty.getHungry();
    blackKitty.getSleepy();
    blackKitty.getBored();
}, 5000)
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
// Display metrics for pet
// You pet should die if Hunger, Boredom, or Sleepiness hits 10.
function petDies() {
    if (blackKitty.hunger >= 10 || blackKitty.sleepiness >= 10 || blackKitty.boredom >= 10) {
        alert("Your pet has crossed the rainbow bridge.");
    }
}

// EXTRAS
// Have your Tamagotchi give birth to baby Tamagotchi...
// ...with special powers (extend the class)!
// Add an exercise() method to your Tamagotchi, that affects certain properties