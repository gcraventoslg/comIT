
const user = {
    name: 'Gloria Caridad',
    lastName: 'Raventos Ladron de Guevara',
    age: 29,
    birthCountry: 'Cuba',
    isMarried: true
};

user.preferSeries = ['Naruto', 'Aqui no hay quien Viva', 'La que se avecina'];
user.musicGroup = 'Imagine Dragons';
user.education = {
    universityName : 'Universidad de las Ciencias Informáticas',  
    degree : 'Computer Science Degree',
    period : '2007-2012',
}

user.speakLanguage = ['Spanish', 'Portugues', 'English'];
user.countriesLived = [
    {
        countryName : 'Cuba',
        years: 25,
        month : 0,
        startYear: '1989',
        endYear: '2015',
    },
    {
        countryName : 'Brazil',
        years: 3,
        month : 0,
        startYear: '2015',
        endYear: '2019',
    },
    {
        countryName : 'Canada',
        years: 0,
        month : 7,
        startYear: '2019',
        endYear: 'Current',
    },
]

const showUser = function (obj) {
    const getProperties = Object.keys(obj);
    getProperties.forEach(property => {          
        if (typeof obj[property] === 'object') {
            if (Array.isArray(obj[property])) {               
                console.log(property.toUpperCase());
                const found =  obj[property].find(function(element) {
                    return typeof element === 'object';
                  });
                  if (found) {
                    obj[property].forEach(element => {showUser(element);});
                  }else{
                      showUser(obj[property]);
                  }                                
            }else {
                  showUser(obj[property]); 
            }            
        }else{
            console.log(`${property} - ${obj[property]}`);
        }        
    })
}

showUser(user);



