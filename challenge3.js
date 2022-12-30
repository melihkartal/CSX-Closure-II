// Create a function dateStamp that accepts a function and returns a function. 
// The returned function will accept whatever arguments the passed-in function accepts and return an object 
// with a date key whose value is today's date (not including the time) represented as a human-readable string (see the Date object for conversion methods), 
// and an output key that contains the result from invoking the passed-in function.


//function dateStamp accepts a callback function and returns a function
//its inner function takes a number as input
//inner function returns the result of todays date and invocation of callback on its input

//'Sun Aug 21 2022'

function dateStamp(callback){
    const newDate = new Date().toDateString();
    let cache = {};
    
    function inner(...input){
    
      cache["date"] = newDate;
      cache["output"]=callback(...input);
      return cache;
    
      
    }
    
    return inner;
  }
  const stampedMultBy2 = dateStamp(n => n * 2);
  console.log(stampedMultBy2(4)); // should log: { date: (today's date), output: 8 }
  console.log(stampedMultBy2(6)); // should log: { date: (today's date), output: 12 }