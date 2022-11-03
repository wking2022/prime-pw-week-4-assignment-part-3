console.log('***** Music Collection *****')

let collection = [];


// let albums = {
//     title: 'My Seed',
//     artist: 'Good Sight Will',
//     yearPublished: 2021
// }
// let albums1 = {
//     title: 'Must Be', artist: 'Good Sight Will', yearPublished: 2021
// }
// let albums2 = {
//     title: 'Blessed Up',
//     artist: 'Good Sight Will',
//     yearPublished: 2022
// }
// let albums3  = {
//     title: 'Must Be',
//     artist: 'Good Sight Will',
//     yearPublished: 2019
// }
// let albums4  = {
//     title: 'Red Wine',
//     artist: 'Bob Marley',
//     yearPublished: 1983
// }
// let albums5 = {
//     title: 'Those Old Days',
//     artist: 'Willy Killington',
//     yearPublished: 1983
// }
// let albums6 = {
//     title: 'Weak Link',
//     artist: 'Kingdom Bill',
//     yearPublished: 2001
// }


function addToCollection( title, artist, yearPublished ){
    let albums = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
    }
    
    return collection.push([title, artist, yearPublished]);
};
function showCollection([]){
    return
}

addToCollection('Must Be','Good Sight Will', 2021);
console.log(collection);


console.log('Here is a list of some of my favorite Albums:', collection);


// albums.addToCollection( 'All about Me', 'Me', 2001 );


// addToCollection.push[i]('Harry Potter', 'Bel Viv Duvoh', 1962);

// console.log( 'Here is what is in my first object:', albums);