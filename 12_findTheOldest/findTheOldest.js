const findTheOldest = function(people) {
    return people.reduce((person,oldest )=>{
        const currentYear = new Date().getFullYear();
        const personAge = (person.yearOfDeath || currentYear) - person.yearOfBirth;
        const oldAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
        return personAge>oldAge ? person : oldest;
    })
};

module.exports = findTheOldest;



// Do not edit below this line
module.exports = findTheOldest;
