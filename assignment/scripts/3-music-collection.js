console.log('***** Music Collection *****')

let collection = [];


// let albums = {
//     title: 'My Seed',
//     artist: 'Good Sight Will',
//     yearPublished: 2021
// }
// let albums1 = {
//     title: 'Must Be', artist: 'Good Sight Will', yearPublished: 2021
//

function addToCollection( title, artist, yearPublished ){
    let albums = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
    }
    return collection.push([title, artist, yearPublished]);
};


addToCollection('Weak Link','Kingdom Bill', 2001);
console.log(collection);
addToCollection('Must Be','Good Sight Will', 2021);
console.log(collection);


// console.log('Here is a list of some of my favorite Albums:', collection);


// albums.addToCollection( 'All about Me', 'Me', 2001 );


// addToCollection.push[i]('Harry Potter', 'Bel Viv Duvoh', 1962);

// console.log( 'Here is what is in my first object:', albums);

// function showCollection([]){
//     return
// }