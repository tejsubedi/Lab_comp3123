// var greeter = function(name){
//     console.log('Hello ' + name);
// }
// greeter("Tej Subedi");

var greeter = (firstName, lastName) => {
    console.log('Hello ${firstName}, ${lastName}');
}
greeter("John", "Smith");