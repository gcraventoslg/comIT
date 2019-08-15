function showNumbers (start , end) {

    if (typeof start === 'number' && typeof end === 'number') {

        if (start === end) {
            console.log('Both parameters are equals');
        }else if (start > end){            
            for (let i = start; i >= end; i--) {
                console.log(i);                
            }
        }else{
            for (let i = start; i <= end; i++) {
                console.log(i);                
            }
        }
        
    }else{
        console.log('Both parameters need to be numbers');
    }
    
}

showNumbers(0, 1000);
showNumbers(1000, 0);
showNumbers(100,100);
showNumbers("100",300);
