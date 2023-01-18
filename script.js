/** OBJECTS */
let myCar;

myCar = {
  make: "Toyota",
  model: "Corolla",
  year: 2019,
};

console.log(myCar.year);

myCar.make = "Ford";
myCar.model = "F-150";

console.log("My new car is a", myCar.year, myCar.make, myCar.model + "!");

/** ARRAYS */
let favoritePets = ["cat", "dog", "pig", "lizard", "snake"];

console.log(favoritePets[3]);

favoritePets.push("guinea pig");
console.log(favoritePets);

console.log(favoritePets.indexOf("dog"));

/** OBJECTS WITH ARRAYS */
let tutor1 = {
  name: "Mario",
  subject: "English",
  age: 28,
  students: ["Diana", "Nadeem", "Ben"],
};

tutor1.students.push("Carlos");
console.log(tutor1.students[0]);

/** ARRAYS WITH OBJECTS */
let tutor2 = {
  name: "Sam",
  subject: "Math",
  age: 25,
  students: ["Nadeem", "Carlos", "Karla"],
};

let allTutors = [tutor1, tutor2];
console.log(allTutors[1]);

let bouquet = [
  { type: "rose", color: "pink", count: 4 },
  { type: "rose", color: "yellow", count: 3 },
  { type: "carnation", color: "pink", count: 4 },
  { type: "delphiniums", color: "purple", count: 7 },
];

console.log(bouquet[1].color);
// Output 1 - yellow

console.log(bouquet[3]);
// Output 2 - { type: "delphiniums", color: "purple", count: 7 }

console.log(bouquet[0].type);
// Output 3 - rose

// How would you access the number of carnations?
console.log(bouquet[2].count);

/** ARRAY ITERATION */
let meals = ["Breakfast", "Lunch", "Snack", "Dinner", "Dessert"];

for (let meal of meals) {
  console.log("I ate a big", meal);
}