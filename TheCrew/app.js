//creating an array of info to map through
let data = [
    {
        name: 'Josh',
        age: '34'
    },
    {
        name: 'Christina',
        age: '34'
    },
    {
        name: 'Jagger',
        age: '5'
    },
    {
        name: 'Jaxon',
        age: '3'
    },
    {
        name: 'Mars',
        age: '8'
    },
    {
        name: 'Earth',
        age: '4.5 billion'
    },
];

//looks for the id from css
const info = document.querySelector('#info')

//adds all the info from the array
let details = data.map(function(item){
    return '<div>' + item.name + ' ' + 'is ' + item.age + ' years old.' + '</div>';
});

//adds info from details into div with a new line after each
info.innerHTML = details.join('\n');