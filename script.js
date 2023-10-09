const users = [
{ 
  name: "Zsombor Nagy",
  age: 20 
},
{ 
  name: "Illés Bendegúz",
  age: 20 
},
{ 
  name: "Lendvai Bálint",
  age: 20 
},
{ 
  name: "Balázs Ármin",
  age: 20 
},
];

const userNames = users.map((user, index) => {
  return {
    name: user.name,
    age: user.age,
    id: index + 1
  }
})

console.log(userNames)