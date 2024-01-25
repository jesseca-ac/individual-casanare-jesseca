console.log("Hello B364");



//  WHILE LOOP
let count =5;

while(count !== 0) {
    console.log(`While: ${count}`);
    count--;
};



// DO WHILE LOOP
let number = 5;

do {
    console.log(`Do While: ${number}`);
    number +=1;
} while (number < 10 );



//  FOR LOOP
// example 1
for (let count = 5; count <= 10; count++) {
    console.log(`For: ${count}`);
};

// example 2
let myString = "alex";

for (let x = 0; x < myString.length; x++) {
    console.log(myString[x]);
};

// example 3
let myName = "AlEx";

for (let i = 0; i < myName.length; i++) {
    console.log(myName[i].toLocaleLowerCase());

    if (
        myName[i].toLocaleLowerCase() == "a" ||
        myName[i].toLocaleLowerCase() == "e" ||
        myName[i].toLocaleLowerCase() == "i" ||
        myName[i].toLocaleLowerCase() == "o" ||
        myName[i].toLocaleLowerCase() == "u"
    ){
        console.log(3);

    } else {
        console.log(myName[i]);
    }
};



// CONTINUE AND BREAK STATEMENTS
for (let count = 0; count <= 20; count++) {
    if (count % 2 === 0) {
        continue;
    }
    console.log(`Continue and Break: ${count}`);

    if (count > 10) {
        break;
    }
}


// example 2
let name1 = "alexandro";

for (let i = 0; i < name1.length; i++) {
    console.log(name1[i]);

    if (name1[i].toLocaleLowerCase() === "a") {
        console.log("Continue to the next iteration");
        continue;
    }

    if (name1[1] == "d") {
        break;
    }
}

