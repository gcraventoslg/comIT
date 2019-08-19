 let numbers = [];

 for (let i = 1; i < 1001; i++) {
     numbers.push(i);     
 }

numbers.map(function(number, index) {
    console.log(`index: ${ index }, original number: ${ number }, incremented value: ${ number + 10 }`);
})