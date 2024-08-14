const findTheOldest = function(arr) {
    return arr.reduce((first, second) => {
        const firstAge = getAge(first.yearOfBirth, first.yearOfDeath);
        const secondAge = getAge(second.yearOfBirth, second.yearOfDeath);
        return firstAge > secondAge ? first : second;
    });

    function getAge(birth, death) {
        if (!death) {
            death = new Date().getFullYear();
        };
        return death - birth;
    };
};

// Do not edit below this line
module.exports = findTheOldest;
