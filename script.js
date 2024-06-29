function find HighestAndLowest(arr) {
       let highest = arr[0];
       let lowest = arr[0];
  
    
    for (let i = 1; i < arr.length; i++) {
      
      if (arr[i] > highest) {
        highest = arr[i];
      }
  
      
      if (arr[i] < lowest) {
        lowest = arr[i];
      }
    }
  
    
    console.log('Highest:', highest);
    console.log('Lowest:', lowest);
  }
  
  
  let numbers = [3, 5, 7, 2, 8, -1, 4, 10, 12];
  findHighestAndLowest(numbers);
  