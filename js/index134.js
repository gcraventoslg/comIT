 let numbers = [];

 for (let i = 1; i < 1001; i++) {
     numbers.push(i);     
 }

 let partialResult = 0;
 for (let i = 0; i < numbers.length; i++) {
    partialResult +=numbers[i];
    console.log(partialResult);     
 }

 const message = (partialResult === 500500) ? 'Good Job!!!' : 'Take a look to see if something is wrong';
 console.log(message);