// Create a function hobbyTracker that takes an array of hobbies as a parameter and creates a cache object with each hobby as a key. 
// hobbyTracker should return a function that takes a string representing the hobby and an integer representing how many hours practiced as parameters.

// When the returned function is invoked, it should update the cache object adding the value of the passed in integer 
// to the cache at the key corresponding with the passed in 'hobby' then should return the updated cache object. 
// If the returned function is invoked with no arguments, it should reset all values in the cache object to zero and return the string 'tracker has been reset!'

function hobbyTracker(hobbies) {
    let cache = {};
    //initialize every key value pair to 0
      
    
  hobbies.forEach((element)=>cache[element] = 0);
    function inner(key,value){
      
     
      
    //case 1 : key value pair entered 
    //case 2 : another key value pair entered 
    //case 3: when same key is entered its pair is accumulated 
       if(typeof key === "string" && typeof value === "number"){
        cache[key] = cache[key] + value;
          return cache;
      }
       //case 4: when empty input is entered everything gets reset 
      if(!value){
        for(let i in cache){
          cache[i] = 0;
        }
        return ('tracker has been reset!');
      }
    }
    
    return inner;
  }
  
  const updateHobbies = hobbyTracker(['yoga', 'baking', 'piano']);
  updateHobbies('yoga', 2);
  updateHobbies('baking', 4);
  updateHobbies('yoga', 1);
  console.log(updateHobbies('piano', 2)); // --> { yoga: 3, baking: 4, piano: 2 }
  console.log(updateHobbies()); // --> 'tracker has been reset!'
  console.log(updateHobbies('baking', 1)); // --> { yoga: 0, baking: 1, piano: 0}