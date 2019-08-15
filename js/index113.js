function getShapePerimiter  (base ,height) {
    let perimeter = 0;
    if (base === height) {
        perimeter = 4*base;
    } else {
        perimeter = 2*( height + base );
    }
    console.log(`${perimeter} is the shape perimiter`);

    if (perimeter > 100) {
        console.log('The perimiter is to big');
    }else{
        console.log('The perimiter is fine');  
    }
}
getShapePerimiter(4,25);
getShapePerimiter(10,10);
getShapePerimiter(50,10);

