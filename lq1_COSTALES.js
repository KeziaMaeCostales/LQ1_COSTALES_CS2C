//a. Persona Storage 
var personaOneName = "Maria Delos Santos Las Marias";
var personaOneAge =25;
var personaOneAddress = "Upper Session Road, Baguio City, Benguet";

var personaTwoName = "Juan Gamoso Dela Cruz";
var personaTwoAge =28;
var personaTwoAddress = "San Nicolas, Candon City, Ilocos Sur";

//b. Rearrange Name Sequence
var per1nameRearrange = personaOneName.split(" "); 
var per2nameRearrange = personaTwoName.split(" ");

//d. Variable manipulations 
var per1namelength = personaOneName.length; //lenght of persona1 name
var per2namelength =personaTwoName.length; //lenght of persona2 name 
var per1addlength = personaOneAddress.length; // lenght of persona2 add
var per2addlength = personaTwoAddress.length; //lenght of persona1 add

//e. Operations
var sumOfall = personaOneAge + personaTwoAge + per1namelength + per2namelength + per1addlength + per2addlength; //summing all numeric values
var p1addp2Age = personaOneAge + personaTwoAge; //adding age of p1 and p2 
var subtractper1 = p1addp2Age - per1namelength; //subtracting the lenght of per1 name from "per1namelenght"
var multiplyper2 = subtractper1 * per2namelength; //multiply by the lenght of per2 name from "pernamelenghth"
var p1toThepowerp2 = per1addlength ** per2addlength; //raise the lenght of per1 from the "per1addleght" to the power of per2 lenght from the "per2addlenght"

console.log("Name: ",per1nameRearrange[3].toUpperCase(), per1nameRearrange[4].toUpperCase()+",", per1nameRearrange[0], per1nameRearrange[1], per1nameRearrange[2]+",", "Age: ",personaOneAge,"Adress: ", personaOneAddress);
console.log("Name: ",per2nameRearrange[2].toUpperCase(), per2nameRearrange[3].toUpperCase()+",", per2nameRearrange[0], per1nameRearrange[1],+ ",", "Age: ", personaTwoAge, "Address: ", personaTwoAddress);

// answers of the operations
console.log(sumOfall);
console.log(p1addp2Age);
console.log(subtractper1);
console.log(multiplyper2);
console.log(p1toThepowerp2);
