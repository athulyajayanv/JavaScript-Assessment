/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

//create a variable that can hold a number of NFT's
let NFTpack = [];

//Function mintNFt will take some values as parameters 
//and add it to the NFTpack array
function mintNFT(artist_name, album_name, genre_, country_){
    //create an NFT object
    const NFT = {
        "artist" : artist_name,
        "album" : album_name,
        "genre" : genre_,
        "country" : country_
    }

    //New NFT's are added to the NFTpack array
    NFTpack.push(NFT);

    //prints the name of the artist to confirm that function is working properly
    console.log(artist_name);
}

//Function listNFTs will loop through array NFTpack and prints their metadata
function listNFTs(){
    for(let i = 0; i < NFTpack.length; i++ ){
        console.log("Artist: " +NFTpack[i].artist);
        console.log("Album: " +NFTpack[i].album);
        console.log("Genre: " +NFTpack[i].genre);
        console.log("Country: " +NFTpack[i].country + "\n");
    }
}

//prints total number of NFts that we have minted to the console
function getTotalSupply(){
    console.log("Total number of NFT's supplied: " + NFTpack.length);
}

console.log("\t");

//Functions are called below this line
mintNFT("Kings of Leon", "When You See Yourself", "Indie", "United States");
mintNFT("Grimes", "War Nymph Collection", "Fantasy", "Canada");
mintNFT("3LAU", "Ultraviolet", "Electronic", "United States");
mintNFT("RAC", "Eleven Songs", "Melodic", "UnitedStates");
console.log("\t");
listNFTs();
getTotalSupply();
