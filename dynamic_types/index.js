var dynamic_types;
(function (dynamic_types) {
    var person = 'John Papa';
    console.log(person.substring(0, 4));
    var person_object = {
        name: 'Colleen',
        age: 25
    };
    console.log(person_object.name);
})(dynamic_types || (dynamic_types = {}));
