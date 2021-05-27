// let name;
name = 'John';
name = 'Pete';

let surname;
surname = 'Smith';

alert(name + ' ' + surname);

const user = {
    name: "John"   //const изменять нельзя.
};

user.name = "Pete";
console.log(user.name); //работать будет.


let salaries = {

    John: 100,

    Ann: 160,

    Pete: 130

};
let sum;
sum = ['John' + 'Ann' + 'Pete'];