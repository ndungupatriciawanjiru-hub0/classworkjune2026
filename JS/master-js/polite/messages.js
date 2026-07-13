const fs = require('fs');

/*
Step 1. ensure your js file can access the data.
*/
const data = require("./data.json");
console.log(data);

/*
Step 2: use a for/while loop to go through each data point
-print the data
*/
let i = 0;
while (i < data.length) {
    console.log(data[i]);
    i++;
}

/*
Step 3: for each data point create a message example
'Dear <<sir/madam>based on gender>>
We regret to inform you that you wount be going
to next stage of the interview.
the reasone.you not a good fit.
'
*/
function createMessage(person) {
    const salutation = person.gender === 'Male' ? 'sir' : 'madam';
    const message = `Dear ${salutation},
We regret to inform you that you wount be going
to next stage of the interview.
the reasone.you not a good fit.
`;
    console.log(message);
    return message;
}

i = 0;
while (i < data.length) {
    createMessage(data[i]);
    i++;
}

/*
Step 4: create an empty array and fill it with
the user data including the messages.
output object should be
{
  "id": 4,
  "first_name": "Krystle",
  "last_name": "Rubroe",
  "email": "krubroe3@indiatimes.com",
  "gender": "Female",
  "phone": "244-641-3793",
  "message": <>
}
*/
const output = [];
i = 0;
while (i < data.length) {
    const person = data[i];
    output.push({
        id: person.id,
        first_name: person.first_name,
        last_name: person.last_name,
        email: person.email,
        gender: person.gender,
        phone: person.phone,
        message: createMessage(person)
    });
    i++;
}

/*
Step 5: write this data to a file called output.json.
Hint do JSON.stringify -> js object to json notation.
save this data to your file ie output.json
*/
fs.writeFileSync('./output.json', JSON.stringify(output, null, 2));
console.log('output.json has been created!');