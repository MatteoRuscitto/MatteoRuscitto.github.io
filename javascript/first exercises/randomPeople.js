people = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Heidi", "Ivan", "Judy"];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
for (let i = 0; i < 2; i++) {
   let randomIndex = getRandomInt(people.length);
   console.log(people[randomIndex],"won!");
}
