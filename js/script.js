/**
 * @author ETOUMI Aristide
 * @description DI-Bootcamp Week3 Day1 Daily Challenge Planets
 */

/*
In this exercise we will be creating a webpage with a black background as the universe and we will fill 
the universe with planets and their moons.
We will provide the HTML page.
You only have to work with a JS file.

1- Create an array which value is the planets of the solar system.
2- For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
3- Each planet should have a different background color. (Hint: you could add a new class to each planet - 
    each class containing a different background-color).
4- Finally append each div to the <section> in the HTML (presented below).
5- Bonus: Do the same process to create the moons.
Be careful, each planet has a certain amount of moons. How should you display them?
Should you still use an array for the planets ? Or an array of objects ?
*/
//1
const planets = [
    {
        planetName: "Mercure",
        moons: 0
    },
    {
        planetName: "Venus",
        moons: 0
    },
    {
        planetName: "Terre",
        moons: 1
    },
    {
        planetName: "Jupiter",
        moons: 0
    },
    {
        planetName: "Mars",
        moons: 2
    },
    {
        planetName: "Neptune",
        moons: 4
    },
    {
        planetName: "Uranus",
        moons: 0
    },
    {
        planetName: "Saturne",
        moons: 5
    }
];

//2 + 3 + 4
let section = document.getElementsByClassName("listPlanets")[0];
for (const planet of planets) {
    let div = document.createElement('div');
    div.classList.add("planet");
    //div.innerText = planet;
    div.classList.add(planet.planetName.toLocaleLowerCase());
    for (let i = 0; i < planet.moons; i++) {
        let divLune = document.createElement("div");
        divLune.classList.add("moon");
        div.appendChild(divLune);
        divLune.style.left = (i + 2) * 10 + "px";
    }

    //console.log(div);
    section.appendChild(div);
}

//5
const moons = []