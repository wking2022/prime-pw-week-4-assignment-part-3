console.log('***** Music Collection *****')

let collection = [];


function addToCollection( title, artist, yearPublished ){
    let albums = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
    }
    return collection.push({title, artist, yearPublished});
};

addToCollection('Weak Link','Kingdom Bill', 2001);
console.log(collection);
addToCollection('Must Be','Good Sight Will', 2021);
console.log(collection);
addToCollection('Those Old Days','Willy Killington', 1983);
console.log(collection);
addToCollection('Red Wine','Bob Marley', 1987);
console.log(collection);
addToCollection('Those Old Days','Willy Killington', 1983);
console.log(collection);
addToCollection('Blessed Up','Good Sight Will', 2019);
console.log(collection);
addToCollection('BMy Seed','Good Sight Will', 2021);
console.log(collection);


function showCollection([]){
    for (let i=0; i<collection.length; i++){
        console.log(`${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}`)
    };
}
console.log(showCollection([]))