function getShapePerimiter  (base ,height) {
    let message = '';
    const perimeter = (base === height) ? 4*base : 2*( height + base );
    message += `${perimeter} is the shape perimiter \n`;
    message += (perimeter > 100) ? 'The perimiter is to big' : 'The perimiter is fine';
    return message;
}
console.log(getShapePerimiter(4,25));
console.log(getShapePerimiter(10,10));
console.log(getShapePerimiter(50,10));

