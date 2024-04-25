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
    // age++ every minute
        setInterval(aging, 60000);
        function aging() {
            this.age = this.age++;
        }
    }
    eat() {
    // function linked to a button that, when clicked, "feeds" pet
    // need event listener for click
    // hunger--
        const feedButton = document.querySelector(".feed");
        feedButton.addEventListener("click", function() {
            this.hunger = this.hunger--
        })
    }
    sleep() {
    // function linked to a button that, when clicked, pet "sleeps"
    // need event listener for click
    // duration of sleep: 5 seconds
    // sleepiness--
    const sleepButton = document.querySelector(".sleep");
    sleepButton.addEventListener("click", function() {
        this.sleepiness = this.sleepiness--
    })
    }
    play() {
    // function linked to a button that, when clicked, "feeds" pet
    // need event listener for click
    // duration of play: 5 seconds
    // boredom--
    const playButton = document.querySelector(".play");
    playButton.addEventListener("click", function() {
        this.boredom = this.boredom--
    })
    }
    morph() {
    // when age reaches 5, pet becomes sophisticated gentlepet (mustache)
        if (this.age >= 5) {
            // Working on it
        }
    }
    vitals() {
        return this.age, this.hunger, this. sleepiness, this.boredom
    }
}
// Instantiate your Tamagotchi
const blackKitty = new Nadagotchi("Grump");
console.log(blackKitty.vitals());
// Just figuring out how to work innerHTML
const ageLog = document.getElementById("age-target");
agetarget.innerHTML = 1;
// Add the ability to name your pet.
// let petName = {};
// let userInput = prompt("Congratulations on your new virtual pet! Now it's time for a name.")
// Increase your pet's age every x minutes

// Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.

// You pet should die if Hunger, Boredom, or Sleepiness hits 10.
// Alert “Your pet has crossed the rainbow bridge”

// Morph your pet at certain ages.

// EXTRAS
// Have your Tamagotchi give birth to baby Tamagotchi...
// ...with special powers (extend the class)!
// Add an exercise() method to your Tamagotchi, that affects certain properties