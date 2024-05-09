let myInfo ={
    firstName: 'Victor',
    lastName: 'Castaneda',
    age: 19,
    address: '1410 E Palm Ln',
    email: 'victor.matacastaneda.bhs@gmail.com',
    githubprofileURL: 'https://github.com/Victor-Castaneda'
    }

//function printContact() 
{
//console.log(myInfo.firstName , myInfo.lastName);
//console.log(myInfo.age);
//console.log(myInfo.address);
//console.log(myInfo.githubprofileURL);
}

//printContact(1-4);

let book = [
{   
    title: 'What if it\'\s us',
    authors: [ 'Adam Silvera' , 'Becky Albertalli' ],
    genres: [ 'Young adult literature', ' Romantic comedy'],
    pages: 448,
    price: 19.99
},
{
        title: 'Atomic Habits',
        pages: 320,
        author: "James Clear",
        genre: ["Self Help", "Personal Development"],
        price: 23.99
},
{
    title: "Silence of the Lambs",
    pages: 380,
    author: 'Thomas Harris',
    genre:['Thriller','Horror'],
    price: 17.99
}

]
function printBook() {
    console.log(`title: ${book[0].title}`);
    console.log(`authors: ${book[0].authors[0]} and ${book[0].authors[1]}`);
    console.log(`genres: ${book[0].genres[0]} , ${book[0].genres[1]}`);
    console.log(`# of pages: ${book[0].pages}`);
    console.log(`price for ${book[0].title}  is $${book[0].price}`);
}

function printBook2(){
    console.log(`title: ${book[1].title}`);
    console.log(`author: ${book[1].author}`);
    console.log(`genres: ${book[1].genre[0]} , ${book[1].genre[1]}`);
    console.log(`# of pages: ${book[1].pages}`);
    console.log(`the price for ${book[1].title} is $${book[1].price}`);
}

printBook();

printBook2(); 

