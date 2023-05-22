const cities = [
    "New York City",
    "Tokyo",
    "Paris",
    "London",
    "Sydney",
    "Rio de Janeiro",
    "Mumbai",
    "Dubai",
    "Moscow",
    "Berlin",
    "Toronto",
    "Mexico City",
    "Cape Town",
    "Shanghai",
    "Buenos Aires",
];
const actions = [
    "run",
    "jump",
    "dance",
    "sing",
    "cook",
    "paint",
    "write",
    "read",
    "swim",
    "eat",
];
const weather = [
    "sunny",
    "cloudy",
    "rainy",
    "windy",
    "stormy",
    "foggy",
    "snowy",
];
const activities = [
    "sightseeing",
    "hiking",
    "swimming",
    "shopping",
    "dining",
    "skiing",
    "surfing",
    "camping",
];
const celebrities = [
    "Beyoncé",
    "Leonardo DiCaprio",
    "Adele",
    'Dwayne "The Rock" Johnson',
    "Jennifer Aniston",
    "Brad Pitt",
    "Taylor Swift",
    "Chris Hemsworth",
    "Emma Watson",
    "Will Smith",
];
const accommodation = [
    "hotel",
    "apartment",
    "hostel",
    "villa",
    "resort",
    "motel",
    "campsite",
];
const timeframe = [
    "a Weekend",
    "one week",
    "two weeks",
    "one month",
    "three months",
];

const randomData = (arr) => {
    let position = Math.floor(Math.random() * arr.length);
    return arr[position];
};

console.log(`You are going to travel to ${randomData(cities)} for ${randomData(timeframe)} where you will ${randomData(actions)} so much and enjoy a ${randomData(weather)} 
weather while ${randomData(activities)} and meeting ${randomData(celebrities)} at your ${randomData(accommodation)}`);
