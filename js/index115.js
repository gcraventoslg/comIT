function getLongerText (text1, text2) {

   if (text1.length > text2.length) {
    return text1;   
   }else if(text2.length > text1.length){
       return text2;
   }else{
       return 'The texts have the same length';
   }
}
console.log(getLongerText('gloria', 'maria'));
console.log(getLongerText('Welcome', 'Bye'));
console.log(getLongerText('LIFE','two'));
console.log(getLongerText('hi','oh'));


