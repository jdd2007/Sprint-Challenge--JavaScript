// ==== Objects ====

/* 
  Given the following information about dinosaurs, create 3 objects: 
  Use this pattern to create your objects: 
  object name, diet, weight, length, period
*/

// tyrannosaurus, carnivorous, 7000kg, 12m, Late Cretaceious

const tyrannosaurus = {
  diet: 'carnivorous',
  weightinKG: 7000,
  lengthinM: 12,
  period: 'Late Cretaceous',
};

// stegosaurus, herbivorous, 2000kg, 9m, Late Jurassic

const stegosaurus = {
  diet: 'herbivorous',
  weightinKG: 2000,
  lengthinM: 9,
  period: 'Late Jurassic',
};

// velociraptor, carnivorous, 15kg, 1.8m, Late Cretaceious

const velociraptor = {
  diet: 'carnivorous',
  weightinKG: 15,
  lengthinM: 1.8,
  period: 'Late Cretaceous'
};

// Using your dinosaur objects, log answers to these questions:

// How much did tyrannosaurus weigh?
console.log(`The tyrannosaurus weighted about ${tyrannosaurus.weightinKG} kg`);

// What was the diet of a velociraptor?
console.log(`The velociraptor's diet was ${velociraptor.diet}`);

// How long was a stegosaurus?
console.log(`A stegosaurus was ${stegosaurus.lengthinM} meters long`);

// What time period did tyrannosaurus live in?
console.log(`The tyrannosaurus dinosaur lived in the ${tyrannosaurus.period}`);


// Create a new roar method for the tyrannosaurus.  When called, return "RAWERSRARARWERSARARARRRR!" Log the result.

tyrannosaurus.roar = function(){
  return("RAWERSRARARWERSARARARRRR!");
};

console.log(`What does the tyrannosaurus say? ${tyrannosaurus.roar()}`);


// ==== Arrays ====

// Given an array of college graduates.  Complete the following requests WITHOUT using any array methods like .forEach(), .map(), .reduce(), .filter()

const graduates = [{"id":1,"first_name":"Cynde","university":"Missouri Southern State College","email":"ctorry0@macromedia.com"},
{"id":2,"first_name":"Saundra","university":"The School of the Art Institute of Chicago","email":"swhal1@state.gov"},
{"id":3,"first_name":"Lambert","university":"Marian College","email":"lparham2@techcrunch.com"},
{"id":4,"first_name":"Modestine","university":"International Medical & Technological University","email":"mdolder3@symantec.com"},
{"id":5,"first_name":"Chick","university":"Sultan Salahuddin Abdul Aziz Shah Polytechnic","email":"camorts4@google.com.au"},
{"id":6,"first_name":"Jakob","university":"Fachhochschule Rosenheim, Hochschule für Technik und Wirtschaft","email":"jharken5@spiegel.de"},
{"id":7,"first_name":"Robbi","university":"Salem University","email":"rbrister6@redcross.org"},
{"id":8,"first_name":"Colline","university":"Coastal Carolina University","email":"cbrosh7@alibaba.com"},
{"id":9,"first_name":"Michail","university":"Universidad Católica de Ávila","email":"mrome8@shinystat.com"},
{"id":10,"first_name":"Hube","university":"Universitat Rovira I Virgili Tarragona","email":"hlethbrig9@foxnews.com"}]

/* Request 1: Create a new array called universities that contains all the univeristies in the graduates array.  

Once you have the new array created, sort the universities alphabetically and log the result. */
const universities = [];

for (i=0; i<graduates.length; i++) {
  universities.push(graduates[i].university)
};

universities.sort();

console.log(`Universities of graduates, sorted alphabetically: ${universities}`);

/* Request 2: Create a new array called contactInfo that contains both first name and email of each student. 

The resulting contact information should have a space between the first name and the email information like this: 
Name email@example.com

Log the result of your new array. */
const contactInfo = [];

for (let i = 0; i < graduates.length; i++) {
  let nameAndEmail = (graduates[i].first_name + ' ' + graduates[i].email);
  contactInfo.push(nameAndEmail);
};

console.log(`First name and email of each student: ${contactInfo}`);


/* Request 3: Find out how many universities have the string "Uni" included in their name. Create a new array called uni that contains them all. Log the result. */
const uni = [];

for (let i=0; i<universities.length; i++) {
  if (universities[i].includes('Uni')) {
    uni.push(universities[i]);
  }
};

console.log(`Universities with the string 'Uni' in their name: ${uni}`)
console.log(`There are ${uni.length} universities in our records with the string 'Uni' in their name`)

// ==== ADVANCED Array Methods ====

// Given this zoo data from around the United States, follow the instructions below.  Use the specific array methods in the requests below to solve the problems.


zooAnimals = [{"animal_name":"Jackal, asiatic","population":5,"scientific_name":"Canis aureus","state":"Kentucky"},
{"animal_name":"Screamer, southern","population":1,"scientific_name":"Chauna torquata","state":"Alabama"},
{"animal_name":"White spoonbill","population":8,"scientific_name":"Platalea leucordia","state":"Georgia"},
{"animal_name":"White-cheeked pintail","population":1,"scientific_name":"Anas bahamensis","state":"Oregon"},
{"animal_name":"Black-backed jackal","population":2,"scientific_name":"Canis mesomelas","state":"Washington"},
{"animal_name":"Brolga crane","population":9,"scientific_name":"Grus rubicundus","state":"New Mexico"},
{"animal_name":"Common melba finch","population":5,"scientific_name":"Pytilia melba","state":"Pennsylvania"},
{"animal_name":"Pampa gray fox","population":10,"scientific_name":"Pseudalopex gymnocercus","state":"Connecticut"},
{"animal_name":"Hawk-eagle, crowned","population":10,"scientific_name":"Spizaetus coronatus","state":"Florida"},
{"animal_name":"Australian pelican","population":5,"scientific_name":"Pelecanus conspicillatus","state":"West Virginia"}];

/* Request 1: .forEach()

The zoo wants to display both the scientific name and the animal name in front of the habitats.  Return an array with only the animal and scientific names in it.  The individual values in the array should look like this "Name: Jackal, asiatic, Scientific: Canis aureus."

*/
const animalNames = [];

zooAnimals.forEach(function(info){
  let animalName = `(Name: ${info.animal_name}, ${info.scientific_name}) `;
  animalNames.push(animalName);
});

console.log(`Array with each element containing both names of each animal: ${animalNames}`);

/* Request 2: .map()    

The zoos need a list of all their animal's names (names only, not scientific) converted to lower case.  Create a new array named lowerCase and map over each name to convert them all to lower case.  Log the resut.

*/

const namesOnly = [];

zooAnimals.forEach((info) => {
  return namesOnly.push(info.animal_name);
});

/*
zooAnimals.forEach(function(info){
  namesOnly.push(info.animal_name);
});
*/

const lowerCase = namesOnly.map(theName => {
  return theName.toLowerCase();
});

console.log(`Array/list of the animal names (non-scientific) in lower case: ${lowerCase}`);

/* Request 3: .filter() 

The zoos are concenred about animals with a lower population count. Find out which animals have a population less than 5.

*/

const popUnder5 = zooAnimals.filter((animal) => {
  return animal.population < 5;
});

/*
const popUnder5 = zooAnimals.filter(function(animal) {
  return animal.population < 5; 
});
*/


console.log('Below is an array containing all animals with a population count lower than 5:')
console.log(popUnder5);

/* Request 4: .reduce() 

The zoos need to know their total animal population across the United States.  Find the total population from all the zoos using the .reduce() method.
*/

const populationTotal = 0;
let populationSizes = [];

zooAnimals.map((info) => {
  populationSizes.push(info.population);
});

/*
zooAnimals.forEach(function(info){
  populationSizes.push(info.population);
});
*/

console.log(`Population sizes of each animal: ${populationSizes}`);

const reducer = (x,y) => (x+y);
const popTotal = populationSizes.reduce(reducer);

console.log(`Total population of all populations: ${popTotal}`);

/* 

Stretch: If you haven't already, convert your array method callbacks into arrow functions.

*/

