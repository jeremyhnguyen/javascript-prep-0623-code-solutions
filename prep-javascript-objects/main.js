const person = { firstName: 'Jeremy', lastName: 'Nguyen', hobby: 'traveling' };

console.log(person);

const fullName = person.firstName + ' ' + person.lastName;

console.log("The person's name is " + fullName);

person.job = 'student';

console.log("The person's current job is being a", person.job);

person['previousJob'] = 'Production Assistant';

console.log("The person's previous job was", person['previousJob']);

console.log(person);
