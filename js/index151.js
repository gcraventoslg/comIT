
const iAmGroot = function () {
    return 'I\'m Groot!!';
}

const groot = {
    greet : iAmGroot,
    speak : iAmGroot
}

console.log(groot.greet());
console.log(groot.speak());