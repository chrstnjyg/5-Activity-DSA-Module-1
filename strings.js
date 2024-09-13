let favActorFirstName = 'Leonardo';
let favActorLastName = 'DiCaprio';
let fullName = favActorFirstName + ' ' + favActorLastName;

let uppercase = fullName.toLowerCase(); 
let favPetName = 'Summer'; 
let lowercase = favPetName.toUpperCase();
let message = 'My favorite actor is ' + fullName.toUpperCase();
message += ', ' + 'his best show is Catch Me If You Can.';

console.log('Favorite Actor First Name:', favActorFirstName);
console.log('Favorite Actor Last Name:', favActorLastName);
console.log('Full Name:', fullName);
console.log('Lowercase Full name :', uppercase);
console.log('Uppercase Pet Name :', lowercase);
console.log('Message:', message);