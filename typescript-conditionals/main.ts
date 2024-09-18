// Person interface describes the structure of each person object with the following properties: 
interface Person {
    name: string;
    dateOfBirth: string;
    children: number;
    country: string;
    knowsHowToProgram: boolean;
}
// Array of people with the provided data
const people: Person[] = [
    {
        name: "Riannon Inch",
        dateOfBirth: "10/7/1976",
        children: 5,
        country: "Botswana",
        knowsHowToProgram: false
    },
    {
        name: "Baird Martine",
        dateOfBirth: "1/16/1977",
        children: 3,
        country: "Ukraine",
        knowsHowToProgram: false
    },
    {
        name: "Cristiano O'Clery",
        dateOfBirth: "16/19/1977",
        children: 1,
        country: "Brazil",
        knowsHowToProgram: true
    },
    {
        name: "Melony Hurdle",
        dateOfBirth: "9/15/1990",
        children: 5,
        country: "Philippines",
        knowsHowToProgram: false
    },
    {
        name: "Shelton Fayerman",
        dateOfBirth: "3/7/1979",
        children: 3,
        country: "Poland",
        knowsHowToProgram: true
    }
];
console.log(people);

2. // Each person is represented by an object in an array:
 //Function to parse date of birth strings to Date object
 //the parseDateOfBirth function converts a date string in MM/DD/YYYY format to a js date object
 //new Date (year, month -1, day) creates a Date object, adjusting for the 0based month indexing in js
 function parseDateOfBirth(dateOfBirth: string): Date {
    const [month, day, year] = dateOfBirth.split('/').map(Number);
    return new Date(year, month -1, day);
 }

 //Extract the dates of birth
 const firstPersonDob = parseDateOfBirth(people[0].dateOfBirth);
 const lastPersonDob = parseDateOfBirth(people[people.length - 1].dateOfBirth);

 // compare ages
 // The if statement compares the Date objects of the first and last person. 
 if (firstPersonDob < lastPersonDob) {
    console.log(`${people[0].name} is older than ${people[people.length -1].name}.`);
 } else {
    console.log(`${people[0].name} is not older than ${people[people.length -1].name}`);
 }

 //Compare number of children
 // the number of children for the 2nd and 3rd persons is compared using a simple if statement
 const secondPersonChildren = people [1].children;
 const thirdPersonChildren = people[2].children;

 if (secondPersonChildren === thirdPersonChildren){
    console.log(`${people[1].name} has the same number of children as ${people[2].name}.`);
 } else {
    console.log(`${people[1].name} does not have the same number of children as ${people[2].name}.`);
 }

 //You can create an if statement to check if both the 1st and 4th people in the array know how to program using their knowsHowToProgram property.
 if (people [0].knowsHowToProgram && people[3].knowsHowToProgram) {
    console.log("Yay!"); //output if both know how to program
 } else {
    console.log("LMGTFY"); //output if one or both dont know how to program
 }

 //check the 2nd persons nationality and output greeting
const secondPersonCountry = people[1].country;
//switch evaluates secondPersonCountry and compares it to the cases
switch (secondPersonCountry) {
    case "iceland":
        console.log("Hæ"); //output for Iceland
        break;
    case "Spain":
        console.log("Hola"); //output for Spain
        break;
    case "Korea":
        console.log("여보세요"); //output for Korea
        break;
    default:
        console.log("Hello"); //Default output for any other country
            break;
}

//Use a ternary operator to check if the 2nd persons name is longer than 5 characters
// The ternary operator checks if the length of the 2nc persons name(retrived using people[1].name.length) is greater than 5.
const isNameLong = people[1].name.length < 5 ? "yes, longer than 5 characters" : "No, not longer than 5 characters";
console.log(isNameLong);