const statuses=[200,204,404,500];

const error= statuses.filter(s=> s!==200);

const label= statuses.map(s=>`statuses:${s}`);

const allOk= statuses.every(s=> s==200);

console.log(error);
console.log(label);
console.log(allOk);
console.log(statuses[0]);



